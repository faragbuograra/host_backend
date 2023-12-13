import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmployEctController } from './EmployEct.controller.admin'

// import { PublicEmployEctController } from './management.controller.public'


// export const PublicEmployEctRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmployEct`, PublicEmployEctController.index)
//     router.get(`${ prefix }/EmployEct/:id`, PublicEmployEctController.show)
// }

export const AdminEmployEctRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmployEct`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployEctController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmployEctController.store
        )

    router
        .route(`${ prefix }/EmployEct/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmployEctController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmployEctController.update
        )
        .delete(
            AdminEmployEctController.destroy
        )
}
