// import { NextFunction, Request, Response } from "express";
// import path from "path";
// import { UPLOADS_PATH } from "../../config";
// import Mail from "./mail.model";

// import { UtilDatabase } from "../../Utils/finder";
// import MailCopy from "../MailCopy/mailcopy.model";
// import { json } from "stream/consumers";
// import e from "cors";
// import MailTo from "../MailTo/mailto.model";
// import MailFile from "../MailFile/mailfile.model";
// import { Console } from "console";
// import Management from "../Management/management.model";
// export const PublicMailController = {
//   //index
//   index: async (req: Request, res: Response, next: NextFunction) => {
//     let query = Mail.query().where('management_id_from', req.user.management_id?req.user.management_id:0).withGraphFetched(
//       `[management,mailto,mailType,mailCatogory,user,mailfile]`
//     );

//     return await UtilDatabase.finder(Mail, req.query, query)

//       .then((results) => res.json(results))
//       .catch((err) => next(err));
//   },
//   store: async (req: Request, res: Response, next: NextFunction) => {
//     let errors: any = [];
//     var data = req.body;

//     var dataImage = [
//       {
//         attachment: "",
//         mail_id: 0,
//       },
//     ];
//     dataImage.pop();
//     console.log(data);

//     if (data.number=='undefined') {
//       errors.push({ number: `يرجي ادخال رقم المستند` });
//     }
//     if (data.date=='undefined') {
//       errors.push({ date: `يرجي ادخال تاريخ المستند` });
//     }
//     if (data.mailtype_id=='undefined') {
//       errors.push({ mailtype_id: `يرجي ادخال نوع المستند` });
//     }
//     // ظmailtype_id
//     if (data.mailcategory_id=='undefined') {
//       errors.push({ mailcategory_id: `يرجي ادخال تصنيف المستند` });
//     }
//     // path
//     if (data.path=='undefined') {
//       errors.push({ path: `يرجي ادخال مسار المستند` });
//     }
//     //subject
//     if (data.subject=='undefined') {
//       errors.push({ subject: `يرجي ادخال موضوع المستند` });
//     }
//     if (data.description=='undefined') {
//       errors.push({ description: `يرجي ادخال وصف المستند` });
//     }
//     //management_id
   

//     let errorsObject = {};

//     errors.forEach((error) => {
//       for (let field in error) {
//         errorsObject[field] = error[field];
//       }
//     });

//     if (errors.length > 0) {
//       return res.status(400).json({
//         errors: errorsObject,
//         message: "Validation error",
   
//       });
//     } else {
   
//       const trx = await Mail.startTransaction();
//       const trxCopy = await MailCopy.startTransaction();
//       const trxTo = await MailCopy.startTransaction();
//       const trxFile = await MailFile.startTransaction();
//       data.status = true;

//       var copys = data.copy;

//       if (copys!='0') {
//         copys = JSON.parse(copys);
//       }

//       var to = data.mailto;
//       if (to!='0') {
//         to = JSON.parse(to);
//       }

//       console.log(to);
//       console.log(copys);
//       try {
//         // store file
        

//         var date2 = new Date().toISOString().slice(0, 10);

//         // get last id from database
//         var last_id = await Mail.query().max("id as max_id").first();
//         //get last id
//         var id = last_id!.max_id + 1;
//         await Mail.query(trx)
//           .insert({
//             regsir: date2.toString() + "-" + id,
//             number: data.number,
//             date: data.date,
//             mailtype_id: data.mailtype_id,
//             mailcategory_id: data.mailcategory_id,
//             path: data.path,
//             subject: data.subject,
//             supercompany_id: data.supercompany_id,
//             company_id: data.company_id,
//             description: data.description,
//             management_id_from: req.user.management_id,
//             user_id_from: req.user.id,
//           })
//           .then(async (result) => {
//             trx.commit();

//             if (copys!=0) {
//               var mailcopy = copys.map((item: any) => {
//                 return {
//                   mail_id: result.id,
//                   management_id: item.id,
//                 };
//               });
//               await MailCopy.query(trxCopy)
//                 .insert(mailcopy)
//                 .then((result) => {
//                   trxCopy.commit();
//                 });
//             }
//             if (to!='0') {
//               var mailto = to.map((item: any) => {
//                 return {
//                   mail_id: result.id,
//                   management_id: item.id,
//                 };
//               });
//               await MailTo.query(trxTo)
//                 .insert(mailto)
//                 .then((result) => {
//                   trxTo.commit();
//                 });
//             }
//             if (req.files || req.file) {
//               const images = req.files as Express.Multer.File[];
//               const currentDate = new Date();
//               const formattedDate = currentDate.toISOString().substring(0, 10);
//               images.forEach(async (image) => {
//                 return dataImage.push({
//                   attachment: formattedDate + "/" + image.filename,
//                   mail_id: result.id,
//                 });
//               });
//               await MailFile.query(trxFile)
//                 .insert(dataImage)
//                 .then((result) => {
//                   trxFile.commit();
//                 });
//             }
//           })
//           .then((result) =>
//             res.json({
//               message: "Mail created successfully!",
//               regsir: date2 + "-" + id,
//             })
//           );
//       } catch (err) {
//         console.log(err);

//         await trx.rollback();
//         return next(err);
//       }
//     }
//     //get date now  format yyyy-mm-dd
//   },
//   show: async (req: Request, res: Response, next: NextFunction) => {
//     await Mail.query()

//       .findById(req.params.id)
//       .withGraphFetched(
//         `[management,mailto,mailType,mailCatogory,user,mailfile,mailcopy,maillink]`
//       )

//       .throwIfNotFound({ message: "Mail not found!" })
//       .then(async (result: Mail) => {
//         //add management name to mail.mailto object by using map and mailto.management_id
//         if (result?.mailto.length > 0) {
//           //get management name from management model using id \

//           var resolvedPromises = await Promise.all(
//             result?.mailto.map(async (item: any) => {
//               var name = await Management.query()
//                 .findById(item.management_id)
//                 .select("name");
//               item.name = name?.name;
//               return item.name;
//             })
//           );
//         }
//         if (result?.mailcopy.length > 0) {
//           //get management name from management model using id \

//           var resolvedPromises = await Promise.all(
//             result?.mailcopy.map(async (item: any) => {
//               var name = await Management.query()
//                 .findById(item.management_id)
//                 .select("name");
//               item.name = name?.name;
//               return item.name;
//             })
//           );
//         }
//         res.json(result);
//       })
//       .catch((err) => next(err));
//   },
//   /**
//    * ---------------------------------------------------------------------
//    * Update an existing instance of a model
//    * ---------------------------------------------------------------------
//    */
//   update: async (req: Request, res: Response, next: NextFunction) => {
//     var data = req.body;
//     const { id } = req.params;
//     const img = req.file;

//     const trx = await Mail.startTransaction();

//     try {
//       // store file

//       await Mail.query(trx)
//         .patchAndFetchById(id, data)
//         .throwIfNotFound({ message: "Mail not found!" })
//         .then((result) => res.json(result));
//       await trx.commit();
//     } catch (err) {
//       // Delete file

//       await trx.rollback();
//       return next(err);
//     }
//   },

//   /**
//    * ---------------------------------------------------------------------
//    * Destroy an instance of a model
//    * ---------------------------------------------------------------------
//    */
//   destroy: async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params;

//     await Mail.query()
//       .deleteById(id)
//       .throwIfNotFound({ message: "Mail not found!" })
//       .returning("*")
//       .then((result) => res.json(result))
//       .catch((err) => next(err));
//   },
// };
