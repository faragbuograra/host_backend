import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminTypeController } from './type.controller.admin'


export const AdminTypeRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/Type`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminTypeController.index
        )
        .post(
            Multer.simple2('files'),
            AdminTypeController.store
        )

    router
        .route(`${ prefix }/Type/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminTypeController.show
        )
        .patch(
            Multer.none,
            AdminTypeController.update
        )
      
}
