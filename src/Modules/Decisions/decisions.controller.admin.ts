 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import Decisions                               from './decisions.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'

export const AdminDecisionsController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {

        let query = Decisions.query()
        return await UtilDatabase
            .finder(Decisions, req.query, query)
            
            .then((results) => res.json(results))
            .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        var data = req.body
        const file  = req.files
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substring(0, 10);
        const trx = await Decisions.startTransaction()
        data.user_id = req.user.id

        try {
            // store file
            if (file && file[0]!=null   ) {
                //get 
                data.file = formattedDate +'/'+file[0].filename
            }
            data.user_id = req.user.id
            await Decisions
                .query(trx)
                .insert(data)
                .then((result) => res.json(result))

            await trx.commit()
        } catch (err) {
            // Delete file
            if (file && file[0]!=null  ) {
                const img_path = path.resolve(UPLOADS_PATH, 'files', file[0].filename)
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

   
        const trx = await Decisions.startTransaction()
     
        try {
            // store file

         
        await Decisions
            .query(trx)
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'Decisions not found!' })
            .then((result) => res.json(result))
            await trx.commit()
        } catch (err) {
            // Delete file
        

            await trx.rollback()
            return next(err)}

    },


    /**
     * ---------------------------------------------------------------------
     * Destroy an instance of a model
     * ---------------------------------------------------------------------
     */
  
 

}
