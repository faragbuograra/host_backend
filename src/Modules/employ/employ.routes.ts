import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmployController } from './employ.controller.admin'




// export const PublicEmployRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/employ`, PublicEmployController.index)
//     router.get(`${ prefix }/employ/:id`, PublicEmployController.show)
// }

export const AdminEmployRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/employ`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployController.index
        )
        .post(
            Multer.none,
            AdminEmployController.store
        )
        router
        .route(`${ prefix }/indexemploy`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployController.tindex
        )
        // .post(
        //     Multer.none,
        //     AdminEmployController.store
        // )

    router
        .route(`${ prefix }/employ/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmployController.show
        )
        .patch(
            Multer.simple('Employ'),
            AdminEmployController.update
        )
        .delete(
            AdminEmployController.destroy
        )
}
