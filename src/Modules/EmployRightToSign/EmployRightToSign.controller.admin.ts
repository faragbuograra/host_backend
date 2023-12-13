 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import EmployRightToSign                               from './EmployRightToSign.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'

export const AdminEmployRightToSignController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = EmployRightToSign.query()
        return await UtilDatabase
            .finder(EmployRightToSign, req.query, query)
            
            .then((results) => res.json(results))
            .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        var data = req.body
        const file  = req.files
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substring(0, 10);
        const trx = await EmployRightToSign.startTransaction()
        data.status = true
        if (file && file[0]!=null) {
            //get 

        }

        try {
            // store file

       
            await EmployRightToSign
                .query(trx)
                .insert(data)
                .then((result) => res.json(result))

            await trx.commit()
        } catch (err) {
            // Delete file from folder
            if (file) {
                const img_path = path.resolve(UPLOADS_PATH, 'files', formattedDate +'/'+file[0].filename)
                await unlink(img_path);

                console.log(`successfully deleted ${ img_path }`);
            }

            
          

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
   
        const trx = await EmployRightToSign.startTransaction()
     
        try {
            // store file

            if (img) {
                data.img = img.filename
                console.log(data)
            }
        await EmployRightToSign
            .query(trx)
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'EmployRightToSign not found!' })
            .then((result) => res.json(result))
            await trx.commit()
        } catch (err) {
            // Delete file
            if (img) {
                const img_path = path.resolve(UPLOADS_PATH, 'EmployRightToSigns', img.filename)
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

        await EmployRightToSign
            .query()
            .deleteById(id)
            .throwIfNotFound({ message: 'EmployRightToSign not found!' })
            .returning('*')
            .then((result) => res.json(result))
            .catch(err => next(err))

    }

}
