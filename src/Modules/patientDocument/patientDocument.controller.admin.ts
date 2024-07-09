 import { NextFunction, Request, Response } from 'express'
import path                                from 'path'
import { UPLOADS_PATH }                    from '../../config'
import PatientDocument                               from './patientDocument.model'
import { unlink }                          from 'node:fs/promises';
import { UtilDatabase }                    from '../../Utils/finder'


export const AdminPatientDocumentController = {

    //index
    index: async (req: Request, res: Response, next: NextFunction) => {
  


    let query = PatientDocument.query()
    return await UtilDatabase
        .finder(PatientDocument, req.query, query)
        
        .then((results) => res.json(results))
        .catch(err => next(err))



      


    }
    ,
    show: async (req: Request, res: Response, next: NextFunction) => {

        let query = PatientDocument.query()
        .findById(req.params.id)
        .then((result) => res.json(result))
        .catch(err => next(err))

    },
    store: async (req: Request, res: Response, next: NextFunction) => {

        var data = req.body
        const file  = req.files
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substring(0, 10);
        const trx = await PatientDocument.startTransaction()

        try {
    
            if (file && file[0]!=null   ) {
                //get 
                data.file = formattedDate +'/'+file[0].filename
            }
            await PatientDocument
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

   
        const trx = await PatientDocument.startTransaction()
     
        try {
          
         
        await PatientDocument
            .query(trx)
            .patchAndFetchById(id, data)
            .throwIfNotFound({ message: 'PatientDocument not found!' })
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
