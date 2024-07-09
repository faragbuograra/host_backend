import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminPatientDocumentController } from './patientDocument.controller.admin'


export const AdminPatientDocumentRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/PatientDocument`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminPatientDocumentController.index
        )
        .post(
            Multer.simple2('files'),
            AdminPatientDocumentController.store
        )

    router
        .route(`${ prefix }/PatientDocument/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminPatientDocumentController.show
        )
        .patch(
            Multer.none,
            AdminPatientDocumentController.update
        )
      
}
