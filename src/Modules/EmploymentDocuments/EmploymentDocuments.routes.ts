import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentDocumentsController } from './EmploymentDocuments.controller.admin'

// import { PublicEmploymentDocumentsController } from './management.controller.public'


// export const PublicEmploymentDocumentsRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmploymentDocuments`, PublicEmploymentDocumentsController.index)
//     router.get(`${ prefix }/EmploymentDocuments/:id`, PublicEmploymentDocumentsController.show)
// }

export const AdminEmploymentDocumentsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmploymentDocuments`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentDocumentsController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentDocumentsController.store
        )

    router
        .route(`${ prefix }/EmploymentDocuments/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentDocumentsController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentDocumentsController.update
        )
        .delete(
            AdminEmploymentDocumentsController.destroy
        )
}
