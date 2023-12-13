import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminFeadbackController } from './feedback.controller.admin'

import { PublicFeadbackController } from './feedback.controller.public'


export const PublicFeadbackRoutes = (router: Router, prefix: string) => {
    // router.get(`${ prefix }/feedbacks`, PublicFeadbackController.index)
    router.post(`${ prefix }/feedbacks`,
        PublicFeadbackController.store
    )
    // router.get(`${ prefix }/feedbacks/:id`, PublicFeadbackController.show)
}

export const AdminFeadbackRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/feedbacks`)  // domain:8000/api/v1/admin/feedbacks
        .get(
            AdminFeadbackController.index
        )
        .post(
            Multer.simple('feedbacks'),
            AdminFeadbackController.store
        )

    router
        .route(`${ prefix }/feedbacks/:id`) // domain:8000/api/v1/admin/feedbacks/1
        .get(
            //to do 
            AdminFeadbackController.index
        )
        .patch(
            Multer.none,
            AdminFeadbackController.update
        )
        .delete(
            AdminFeadbackController.destroy
        )
}
