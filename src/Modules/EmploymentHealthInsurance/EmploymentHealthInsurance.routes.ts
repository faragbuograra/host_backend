import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentHealthInsuranceController } from './EmploymentHealthInsurance.controller.admin'

// import { PublicEmploymentHealthInsuranceController } from './management.controller.public'


// export const PublicEmploymentHealthInsuranceRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmploymentHealthInsurance`, PublicEmploymentHealthInsuranceController.index)
//     router.get(`${ prefix }/EmploymentHealthInsurance/:id`, PublicEmploymentHealthInsuranceController.show)
// }

export const AdminEmploymentHealthInsuranceRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmploymentHealthInsurance`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentHealthInsuranceController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentHealthInsuranceController.store
        )

    router
        .route(`${ prefix }/EmploymentHealthInsurance/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentHealthInsuranceController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentHealthInsuranceController.update
        )
        .delete(
            AdminEmploymentHealthInsuranceController.destroy
        )
}
