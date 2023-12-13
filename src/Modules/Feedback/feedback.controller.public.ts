import { NextFunction, Request, Response } from "express"
import { UtilDatabase }                    from '../../Utils/finder'
import Feadback                               from './feeback.model'

export const PublicFeadbackController = {

    /**
     * ---------------------------------------------------------------------
     * View index of a model
     * ---------------------------------------------------------------------
     */
   

    /**
     * ---------------------------------------------------------------------
     * View a single model
     * ---------------------------------------------------------------------
     */

      /**
     * ---------------------------------------------------------------------
     *  store a single model
     * ---------------------------------------------------------------------
     */
    store: async (req: Request, res: Response, next: NextFunction) => {
        var data = req.body
        data.users_id = req.user.id
        console.log(data)
            await Feadback
                .query()
                .insert(data)
                .then((result: Feadback) => res.json(result))
                .catch(err => next(err))
        }
    
}
