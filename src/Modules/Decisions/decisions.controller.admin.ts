 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import Decisions                               from './decisions.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'
import Log from '../log/log.model';

export const AdminDecisionsController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {
  
if(req.user.role == "admin" && req.user.type == "admin"){

    let query = Decisions.query()
    return await UtilDatabase
        .finder(Decisions, req.query, query)
        
        .then((results) => res.json(results))
        .catch(err => next(err))

}else{
    let query = Decisions.query()
    .where('status','true')
    return await UtilDatabase
        .finder(Decisions, req.query, query)
        
        .then((results) => res.json(results))
        .catch(err => next(err)) 
      

}
    }
    ,
    show: async (req: Request, res: Response, next: NextFunction) => {

        let query = Decisions.query()
        .findById(req.params.id)
        .then((result) => res.json(result))
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
            await Log
            .query()
            .insert({
                'user_id': req.user.id,
                'action': "insert decision",
                'ip': req.ip,
                'note': "insert decision"
            })
          
            await Decisions
                .query(trx)
                .insert(data)
                .then((result) => res.json(result))
             
          
     
          
                await trx.commit();
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
            await Log
            .query()
            .insert({
                'user_id': req.user.id,
                'action': "edit decision id "+id,
                'ip': req.ip,
                'note': "edit decision"
            })
          

         
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
