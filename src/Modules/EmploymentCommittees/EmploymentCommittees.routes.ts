import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentCommitteesController } from './EmploymentCommittees.controller.admin'

// import { PublicEmploymentCommitteesController } from './management.controller.public'


// export const PublicEmploymentCommitteesRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmploymentCommittees`, PublicEmploymentCommitteesController.index)
//     router.get(`${ prefix }/EmploymentCommittees/:id`, PublicEmploymentCommitteesController.show)
// }

export const AdminEmploymentCommitteesRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmploymentCommittees`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentCommitteesController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentCommitteesController.store
        )

    router
        .route(`${ prefix }/EmploymentCommittees/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentCommitteesController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentCommitteesController.update
        )
        .delete(
            AdminEmploymentCommitteesController.destroy
        )
}
