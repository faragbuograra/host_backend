import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmployFunctionController } from './EmployFunction.controller.admin'

// import { PublicEmployFunctionController } from './management.controller.public'


// export const PublicEmployFunctionRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmployFunction`, PublicEmployFunctionController.index)
//     router.get(`${ prefix }/EmployFunction/:id`, PublicEmployFunctionController.show)
// }

export const AdminEmployFunctionRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmployFunction`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployFunctionController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmployFunctionController.store
        )

    router
        .route(`${ prefix }/EmployFunction/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmployFunctionController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmployFunctionController.update
        )
        .delete(
            AdminEmployFunctionController.destroy
        )
}
