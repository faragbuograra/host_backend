import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentPromotionsController } from './EmploymentPromotions.controller.admin'

// import { PublicEmploymentPromotionsController } from './management.controller.public'


// export const PublicEmploymentPromotionsRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmploymentPromotions`, PublicEmploymentPromotionsController.index)
//     router.get(`${ prefix }/EmploymentPromotions/:id`, PublicEmploymentPromotionsController.show)
// }

export const AdminEmploymentPromotionsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmploymentPromotions`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentPromotionsController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentPromotionsController.store
        )

    router
        .route(`${ prefix }/EmploymentPromotions/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentPromotionsController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentPromotionsController.update
        )
        .delete(
            AdminEmploymentPromotionsController.destroy
        )
}
