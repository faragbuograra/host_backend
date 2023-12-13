import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminManagementController } from './management.controller.admin'

import { PublicManagementController } from './management.controller.public'


export const PublicManagementRoutes = (router: Router, prefix: string) => {
    router.get(`${ prefix }/managements`, PublicManagementController.index)
    router.get(`${ prefix }/managements/:id`, PublicManagementController.show)
}

export const AdminManagementRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/managements`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminManagementController.index
        )
        .post(
            Multer.none,
            AdminManagementController.store
        )

    router
        .route(`${ prefix }/managements/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminManagementController.index
        )
        .patch(
            Multer.simple('management'),
            AdminManagementController.update
        )
        .delete(
            AdminManagementController.destroy
        )
}
