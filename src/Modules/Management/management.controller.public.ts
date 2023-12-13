import { NextFunction, Request, Response } from "express"
import { UtilDatabase }                    from '../../Utils/finder'
import Management                               from './management.model'

export const PublicManagementController = {

    /**
     * ---------------------------------------------------------------------
     * View index of a model
     * ---------------------------------------------------------------------
     */
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = Management.query()
        // add where status = true
        query.where('status', true)

        return await UtilDatabase

            .finder(Management, req.query, query)
            .then((results) => res.json(results))
            .catch(err => next(err))
    },

    /**
     * ---------------------------------------------------------------------
     * View a single model
     * ---------------------------------------------------------------------
     */
    show: async (req: Request, res: Response, next: NextFunction) => {

        await Management
            .query()
            .findById(req.params.id)
            // .withGraphFetched(`[movies]`)
            .throwIfNotFound({ message: 'Management not found!' })
            .then((result: Management) => res.json(result))
            .catch(err => next(err))
    }
}
