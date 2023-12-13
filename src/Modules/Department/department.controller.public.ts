import { NextFunction, Request, Response } from "express"
import { UtilDatabase }                    from '../../Utils/finder'
import Department                               from './department.model'

export const PublicDepartmentController = {

    /**
     * ---------------------------------------------------------------------
     * View index of a model
     * ---------------------------------------------------------------------
     */
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = Department.query()
        // add where status = true
        query.where('status', true)

        return await UtilDatabase

            .finder(Department, req.query, query)
            .then((results) => res.json(results))
            .catch(err => next(err))
    },

    /**
     * ---------------------------------------------------------------------
     * View a single model
     * ---------------------------------------------------------------------
     */
    show: async (req: Request, res: Response, next: NextFunction) => {

        await Department
            .query()
            .findById(req.params.id)
            // .withGraphFetched(`[movies]`)
            .throwIfNotFound({ message: 'Department not found!' })
            .then((result: Department) => res.json(result))
            .catch(err => next(err))
    }
}
