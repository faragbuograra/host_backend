import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminLogController } from './Log.controller.admin'

// import { PublicLogController } from './management.controller.public'


// export const PublicLogRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/log`, PublicLogController.index)
//     router.get(`${ prefix }/log/:id`, PublicLogController.show)
// }

export const AdminLogRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/log`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminLogController.index
        )
        .post(
            Multer.none,
            AdminLogController.store
        )


}
