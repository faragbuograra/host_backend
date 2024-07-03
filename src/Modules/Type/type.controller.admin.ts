 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import Type                               from './type.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'


export const AdminTypeController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {
  
if(req.user.role == "admin" && req.user.type == "admin"){

    let query = Type.query()
    return await UtilDatabase
        .finder(Type, req.query, query)
        
        .then((results) => res.json(results))
        .catch(err => next(err))

}else{
    let query = Type.query()
    .where('status','true')
    return await UtilDatabase
        .finder(Type, req.query, query)
        
        .then((results) => res.json(results))
        .catch(err => next(err)) 
      

}
    }
    ,
    show: async (req: Request, res: Response, next: NextFunction) => {

        let query = Type.query()
        .findById(req.params.id)
        .then((result) => res.json(result))
        .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        var data = req.body

        const trx = await Type.startTransaction()

        try {
    
          
            await Type
                .query(trx)
                .insert(data)
                .then((result) => res.json(result))
             
          
     
          
                await trx.commit();
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

   
        const trx = await Type.startTransaction()
     
        try {
          
         
        await Type
            .query(trx)
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'Type not found!' })
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
