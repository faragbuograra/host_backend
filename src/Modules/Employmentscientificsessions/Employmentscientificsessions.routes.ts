import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentscientificsessionsController } from './Employmentscientificsessions.controller.admin'

// import { PublicEmploymentscientificsessionsController } from './management.controller.public'


// export const PublicEmploymentscientificsessionsRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/Employmentscientificsessions`, PublicEmploymentscientificsessionsController.index)
//     router.get(`${ prefix }/Employmentscientificsessions/:id`, PublicEmploymentscientificsessionsController.show)
// }

export const AdminEmploymentscientificsessionsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/Employmentscientificsessions`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentscientificsessionsController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentscientificsessionsController.store
        )

    router
        .route(`${ prefix }/Employmentscientificsessions/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentscientificsessionsController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentscientificsessionsController.update
        )
        .delete(
            AdminEmploymentscientificsessionsController.destroy
        )
}
