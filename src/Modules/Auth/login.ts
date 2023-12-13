import { NextFunction, Request, Response } from "express"
import { ValidationError }                 from 'objection'
import { JWT_EXPIRY }                      from '../../config'
import { User }                            from '../Users/user.model'
import ms                                  from 'ms'

export const Login = async (req: Request, res: Response, next: NextFunction) => {

    let { username, password } = req.body
    if (!username || !password) {
        let err = new ValidationError({
            type: "InputValidationError",
            message: "password or username missing",
            data: {
                body: req.body
            }
        })

        return next(err)
    }

    if (username) username = String(username).trim().toLowerCase()

    await User
        .query()
        .where('username', username)
        .first()
        .throwIfNotFound({ message: "User not found" })
        .then(async (result) => {
            const valid = await result.$validatePassword(password)
            //if user is not active
            if (result.status == 'false') {
                throw new ValidationError({
                    type: 'ValidationError',
                    message: 'user is not active'
                })
            }
            //if user username is not active
       
            //if user is not verified
            if (result.status == 'false') {
                return res.status(451).json({message: 'user is not verified'})
            }
            if (result.role == 'admin' ) {
                return res.status(451).json({message: 
                'you are not allowed to login from here'})
            }


            const generated = result.$genToken()
            const token     = `Bearer ${ generated }`
            if (valid) {
                return res
                    .setHeader('Set-Cookie', [
                        `accessToken=${ token }; path=/; HttpOnly; Max-Age=${ ms(JWT_EXPIRY) / 100 }; SameSite=None; Secure`
                    ])
                    .json({
                        status: 'success',
                        message: 'logged in',
                        token: result.$genToken(),
                        role: result.role,
                       
                    })
            } else {
                throw new ValidationError({
                    type: 'ValidationError',
                    message: 'wrong password'
                })
            }

        })
        .catch(err => next(err))

}
