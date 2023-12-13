import { Router }                from 'express'
import { Multer }                from '../../Middlewares/multer'
import { AdminEmployPerformanceEvaluationController } from './EmployPerformanceEvaluation.controller.admin'

// import { PublicEmployPerformanceEvaluationController } from './management.controller.public'


// export const PublicEmployPerformanceEvaluationRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/EmployPerformanceEvaluation`, PublicEmployPerformanceEvaluationController.index)
//     router.get(`${ prefix }/EmployPerformanceEvaluation/:id`, PublicEmployPerformanceEvaluationController.show)
// }

export const AdminEmployPerformanceEvaluationRoutes = (router: Router, prefix: string) => {

    // TODO: add insert, update and delete to admin

    router
        .route(`${ prefix }/EmployPerformanceEvaluation`)  // domain:8000/api/v1/admin/categorys
        .get(
            AdminEmployPerformanceEvaluationController.index
        )
        .post(
            Multer.simple2('files'),
            AdminEmployPerformanceEvaluationController.store
        )

    router
        .route(`${ prefix }/EmployPerformanceEvaluation/:id`) // domain:8000/api/v1/admin/categorys/1
        .get(
            //to do 
            AdminEmployPerformanceEvaluationController.index
        )
        .patch(
            Multer.simple2('files'),
            AdminEmployPerformanceEvaluationController.update
        )
        .delete(
            AdminEmployPerformanceEvaluationController.destroy
        )
}
