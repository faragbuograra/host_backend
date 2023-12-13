import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentVacationsController } from './EmploymentVacations.controller.admin'

// import { PublicEmploymentVacationsController } from './management.controller.public'


// export const PublicEmploymentVacationsRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmploymentVacations`, PublicEmploymentVacationsController.index)
//     router.get(`${ prefix }/EmploymentVacations/:id`, PublicEmploymentVacationsController.show)
// }

export const AdminEmploymentVacationsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmploymentVacations`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentVacationsController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentVacationsController.store
        )

    router
        .route(`${ prefix }/EmploymentVacations/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentVacationsController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentVacationsController.update
        )
        .delete(
            AdminEmploymentVacationsController.destroy
        )
}
