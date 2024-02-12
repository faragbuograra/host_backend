 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'

import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'
import Log from './log.model';
export const AdminLogController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = Log.query()
        return await UtilDatabase
            .finder(Log, req.query, query)
            
            .then((results) => res.json(results))
            .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        var data = req.body
        const file  = req.files
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substring(0, 10);
        const trx = await Log.startTransaction()
        data.status = true
        if (file && file[0]!=null   ) {
            //get 
            data.file = formattedDate +'/'+file[0].filename
        }
        data.user_id = req.user.id


        try {
            // store file

       
            await Log
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
   
        const trx = await Log.startTransaction()
     
        try {
            // store file

            if (img) {
                data.img = img.filename
                console.log(data)
            }
        await Log
            .query(trx)
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'Log not found!' })
            .then(async (result) => {
                await Log
                .query()
                .insert({
                    'user_id': req.user.id,
                    'action': "edit",
                    'ip': req.ip,
                    'note': "edit Log"
                }).then((result0) => res.json(result))
              
                
                })
            await trx.commit()
        } catch (err) {
            // Delete file
            if (img) {
                const img_path = path.resolve(UPLOADS_PATH, 'Logs', img.filename)
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

        await Log
            .query()
            .deleteById(id)
            .throwIfNotFound({ message: 'Log not found!' })
            .returning('*')
            .then((result) => res.json(result))
            .catch(err => next(err))

    }

}
