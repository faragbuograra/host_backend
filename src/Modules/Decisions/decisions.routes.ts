import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminDecisionsController } from './decisions.controller.admin'


export const AdminDecisionsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/decisions`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminDecisionsController.index
        )
        .post(
            Multer.simple2('files'),
            AdminDecisionsController.store
        )

    router
        .route(`${ prefix }/decisions/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminDecisionsController.show
        )
        .patch(
            Multer.none,
            AdminDecisionsController.update
        )
      
}
