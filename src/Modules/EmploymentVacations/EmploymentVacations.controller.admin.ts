 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import EmploymentVacations                               from './EmploymentVacations.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'
import Log from '../log/log.model';
export const AdminEmploymentVacationsController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = EmploymentVacations.query()
        return await UtilDatabase
            .finder(EmploymentVacations, req.query, query)
            
            .then((results) => res.json(results))
            .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        var data = req.body
        const file  = req.files
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substring(0, 10);
        const trx = await EmploymentVacations.startTransaction()
        data.status = true
         if (file && file[0]!=null   ) {
            //get 
            data.file = formattedDate +'/'+file[0].filename
        }
        data.user_id = req.user.id

        try {
            // store file

       
            await EmploymentVacations
                .query(trx)
                .insert(data)
                .then((result) => res.json(result))

            await trx.commit()
        } catch (err) {
            // Delete file
          

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

        var data   = req.body
        const { id } = req.params
        const img  = req.file
   
        const trx = await EmploymentVacations.startTransaction()
     
        try {
            // store file

            if (img) {
                data.img = img.filename
                console.log(data)
            }
        await EmploymentVacations
            .query(trx)
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'EmploymentVacations not found!' })
            .then(async (result) => {
                await Log
                .query()
                .insert({
                    'user_id': req.user.id,
                    'action': "edit",
                    'ip': req.ip,
                    'note': "edit EmploymentVacations"
                }).then((result0) => res.json(result))
              
                
                })
            await trx.commit()
        } catch (err) {
            // Delete file
            if (img) {
                const img_path = path.resolve(UPLOADS_PATH, 'EmploymentVacationss', img.filename)
                await unlink(img_path);

                console.log(`successfully deleted ${ img_path }`);
            }

            await trx.rollback()
            return next(err)}

    },


    /**
     * ---------------------------------------------------------------------
     * Destroy an instance of a model
     * ---------------------------------------------------------------------
     */
    destroy: async (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params

        await EmploymentVacations
            .query()
            .deleteById(id)
            .throwIfNotFound({ message: 'EmploymentVacations not found!' })
            .returning('*')
            .then((result) => res.json(result))
            .catch(err => next(err))

    }

}
