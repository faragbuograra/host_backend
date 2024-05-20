import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmployNoteController } from './EmployNote.controller.admin'

// import { PublicEmployNoteController } from './management.controller.public'


// export const PublicEmployNoteRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmployNote`, PublicEmployNoteController.index)
//     router.get(`${ prefix }/EmployNote/:id`, PublicEmployNoteController.show)
// }

export const AdminEmployNoteRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmployNote`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployNoteController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmployNoteController.store
        )

    router
        .route(`${ prefix }/EmployNote/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmployNoteController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmployNoteController.update
        )
        .delete(
            AdminEmployNoteController.destroy
        )
}
