import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentPenaltiesController } from './EmploymentPenalties.controller.admin'

// import { PublicEmploymentPenaltiesController } from './management.controller.public'


// export const PublicEmploymentPenaltiesRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmploymentPenalties`, PublicEmploymentPenaltiesController.index)
//     router.get(`${ prefix }/EmploymentPenalties/:id`, PublicEmploymentPenaltiesController.show)
// }

export const AdminEmploymentPenaltiesRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmploymentPenalties`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentPenaltiesController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentPenaltiesController.store
        )

    router
        .route(`${ prefix }/EmploymentPenalties/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentPenaltiesController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentPenaltiesController.update
        )
        .delete(
            AdminEmploymentPenaltiesController.destroy
        )
}
