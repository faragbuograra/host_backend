import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentTransportationController } from './EmploymentTransportation.controller.admin'

// import { PublicEmploymentTransportationController } from './management.controller.public'


// export const PublicEmploymentTransportationRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmploymentTransportation`, PublicEmploymentTransportationController.index)
//     router.get(`${ prefix }/EmploymentTransportation/:id`, PublicEmploymentTransportationController.show)
// }

export const AdminEmploymentTransportationRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmploymentTransportation`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentTransportationController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentTransportationController.store
        )

    router
        .route(`${ prefix }/EmploymentTransportation/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentTransportationController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentTransportationController.update
        )
        .delete(
            AdminEmploymentTransportationController.destroy
        )
}
