import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import Feadback                               from './feeback.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'

export const AdminFeadbackController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = Feadback.query()

        return await UtilDatabase
            .finder(Feadback, req.query, query)
            .then((results) => res.json(results))
            .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        const data = req.body
     
// get user auth id
        const user = req.user
        data.users_id = user.id

        const trx = await Feadback.startTransaction()

        try {
          
            await Feadback
                .query(trx)
                .insert(data)
                .then((result) => res.json(result))

            await trx.commit()
        } catch (err) {
        
            await trx.rollback()
            return next(err)
        }

    },

    /**
     * ---------------------------------------------------------------------
     * Update an existing instance of a model
     * ---------------------------------------------------------------------
     */
    update: async (req: Request, res: Response, next: NextFunction) => {

        const data   = req.body
        const { id } = req.params

        await Feadback
            .query()
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'Feadback not found!' })
            .then((result) => res.json(result))
            .catch(err => next(err))
    },


    /**
     * ---------------------------------------------------------------------
     * Destroy an instance of a model
     * ---------------------------------------------------------------------
     */
    destroy: async (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params

        await Feadback
            .query()
            .deleteById(id)
            .throwIfNotFound({ message: 'Feadback not found!' })
            .returning('*')
            .then((result) => res.json(result))
            .catch(err => next(err))

    }

}
