import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmploymentAcademicQualificationsController } from './EmploymentAcademicQualifications.controller.admin'

// import { PublicEmploymentAcademicQualificationsController } from './management.controller.public'


// export const PublicEmploymentAcademicQualificationsRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/employPersonalCommitments`, PublicEmploymentAcademicQualificationsController.index)
//     router.get(`${ prefix }/employPersonalCommitments/:id`, PublicEmploymentAcademicQualificationsController.show)
// }

export const AdminEmploymentAcademicQualificationsRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/employmentAcademicQualifications`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmploymentAcademicQualificationsController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmploymentAcademicQualificationsController.store
        )

    router
        .route(`${ prefix }/employmentAcademicQualifications/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmploymentAcademicQualificationsController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmploymentAcademicQualificationsController.update
        )
        .delete(
            AdminEmploymentAcademicQualificationsController.destroy
        )
}
