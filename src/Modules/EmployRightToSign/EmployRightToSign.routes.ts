import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmployRightToSignController } from './EmployRightToSign.controller.admin'

// import { PublicEmployRightToSignController } from './management.controller.public'


// export const PublicEmployRightToSignRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/employRightToSign`, PublicEmployRightToSignController.index)
//     router.get(`${ prefix }/employRightToSign/:id`, PublicEmployRightToSignController.show)
// }

export const AdminEmployRightToSignRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/employRightToSign`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployRightToSignController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmployRightToSignController.store
        )

    router
        .route(`${ prefix }/employRightToSign/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmployRightToSignController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmployRightToSignController.update
        )
        .delete(
            AdminEmployRightToSignController.destroy
        )
}
