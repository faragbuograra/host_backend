// import { Router }                from 'express'
// import { Multer }                from '../../Middlewares/multer'


// import { PublicMailController } from './mail.controller.public'
// import { AdminMailController } from './mail.controller.admin'


// export const PublicMailRoutes = (router: Router, prefix: string) => {
//     router.get(`${ prefix }/mails`, PublicMailController.index)
//     router.get(`${ prefix }/mails/:id`, PublicMailController.show)
//     router.post(`${ prefix }/mails`,            Multer.simple2('mailfiles'), PublicMailController.store)
// }

// export const AdminMailRoutes = (router: Router, prefix: string) => {

//     // TODO: add insert, update and delete to admin

//     router
//         .route(`${ prefix }/mails`)  // domain:8000/api/v1/admin/mail
//         .get(
//             AdminMailController.index
//         )
//         .post(
//             Multer.simple2('mailfiles'),
//             AdminMailController.store
//         )

//     router
//         .route(`${ prefix }/mails/:id`) // domain:8000/api/v1/admin/mail/1
//         .get(
//             //to do 
//             AdminMailController.show
//         )
//         .patch(
//             Multer.simple('mailfiles'),
//             AdminMailController.update
//         )
//         .delete(
//             AdminMailController.destroy
//         )
// }
