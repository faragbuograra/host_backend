 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import EmploymentDocuments                               from './EmploymentDocuments.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'

export const AdminEmploymentDocumentsController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = EmploymentDocuments.query()
        return await UtilDatabase
            .finder(EmploymentDocuments, req.query, query)
            
            .then((results) => res.json(results))
            .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        var data = req.body
        const file  = req.files
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substring(0, 10);
        const trx = await EmploymentDocuments.startTransaction()
        data.status = true
         if (file && file[0]!=null   ) {
            //get 
            data.file = formattedDate +'/'+file[0].filename
        }
        data.user_id = req.user.id

        try {
            // store file

       
            await EmploymentDocuments
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
   
        const trx = await EmploymentDocuments.startTransaction()
     
        try {
            // store file

            if (img) {
                data.img = img.filename
                console.log(data)
            }
        await EmploymentDocuments
            .query(trx)
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'EmploymentDocuments not found!' })
            .then((result) => res.json(result))
            await trx.commit()
        } catch (err) {
            // Delete file
            if (img) {
                const img_path = path.resolve(UPLOADS_PATH, 'EmploymentDocumentss', img.filename)
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

        await EmploymentDocuments
            .query()
            .deleteById(id)
            .throwIfNotFound({ message: 'EmploymentDocuments not found!' })
            .returning('*')
            .then((result) => res.json(result))
            .catch(err => next(err))

    }

}
