import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmployPersonalCommitmentsController } from './EmployPersonalCommitments.controller.admin'

// import { PublicEmployPersonalCommitmentsController } from './management.controller.public'


// export const PublicEmployPersonalCommitmentsRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/employPersonalCommitments`, PublicEmployPersonalCommitmentsController.index)
//     router.get(`${ prefix }/employPersonalCommitments/:id`, PublicEmployPersonalCommitmentsController.show)
// }

export const AdminEmployPersonalCommitmentsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/employPersonalCommitments`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployPersonalCommitmentsController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmployPersonalCommitmentsController.store
        )

    router
        .route(`${ prefix }/employPersonalCommitments/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmployPersonalCommitmentsController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmployPersonalCommitmentsController.update
        )
        .delete(
            AdminEmployPersonalCommitmentsController.destroy
        )
}
