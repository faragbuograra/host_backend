import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminReservationsController } from './reservations.controller.admin'


export const AdminReservationsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/reservations`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminReservationsController.index
        )
        .post(
            Multer.none,
            AdminReservationsController.store
        )

    router
        .route(`${ prefix }/Reservations/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminReservationsController.show
        )
        .patch(
            Multer.none,
            AdminReservationsController.update
        )
      
}
