// import { NextFunction, Request, Response } from 'express'
// import Category from '../Modules/Mail/mail.model'

// import Feadback from '../Modules/Feedback/feeback.model'

// import { User }                            from '../Modules/Users/user.model'
// import Mail from '../Modules/Mail/mail.model'

// import Department from '../Modules/Department/department.model'


// import Management from '../Modules/Management/management.model'
// import { raw } from 'objection'
// import moment from 'moment'


// export const GetStatics = async (req: Request, res: Response, next: NextFunction) => {

    

//     const mail = await Mail
//         .query()
//         .where('status', 'true')
//         .count()
//         .then((rows: any) => Number(rows[0].count))
//         //get number of mails today
//         const todaymail = await Mail
//         .query()
//         .where('status', 'true')
//         .where('created_at', '>', new Date().toISOString().slice(0, 10) + ' 00:00:00')
//         .count()
//         .then((rows: any) => Number(rows[0].count))
//         const mailCountsByDay = await Mail
//         .query()
//         .select(raw('EXTRACT(DOW FROM created_at) as day'), raw('COUNT(*) as count'))
//         .where('status', true)
//         .where('created_at', '>', new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000).toISOString())
//         .groupByRaw('EXTRACT(DOW FROM created_at)')
//         .orderByRaw('EXTRACT(DOW FROM created_at)')
//         .then((rows) => {
//           const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//           const mailCountByDay = {};
      
//           rows.forEach((row) => {
      
//             const dayIndex = Number(row.day);
//             mailCountByDay[dayNames[dayIndex]] = Number(row.count);
//           });
//           return mailCountByDay;
//         });
//         //////////////////////////////////////////////////
  

//     //     const Mailtype = await MailType
//     //     .query()
//     //     .where('status', 'true')
//     //     .count()
//     //     .then((rows: any) => Number(rows[0].count))
//     // const users = await User
//     //     .query()
//     //     .count()
//     //     .then((rows: any) => Number(rows[0].count))

//  //get number of users today
//     const todayusers = await User
//         .query()
//         .where('created_at', '>', new Date().toISOString().slice(0, 10) + ' 00:00:00')
//         .count()
//         .then((rows: any) => Number(rows[0].count))

//         const Departments = await Department
//         .query()
//         .where('status', 'true')
//         .count()
//         .then((rows: any) => Number(rows[0].count))
// // const company = await Company
// // .query()
// // .where('status', 'true')
// // .count()
// // .then((rows: any) => Number(rows[0].count))

// // const managment = await Management
// // .query()
// // .where('status', 'true')
// // .count()
// // .then((rows: any) => Number(rows[0].count))
// // ////////////////////////////////////////////////////////////////
// //  const mailStatistics = await MailTo.query()
// // .select(
// //   'management.id as management_id',
// //   raw('EXTRACT(DOW FROM mailto.created_at) as day'),
// //   raw('COUNT(*) as total_count'),
// //   raw('SUM(CASE WHEN mailto.status = true THEN 1 ELSE 0 END) as true_count'),
// //   raw('SUM(CASE WHEN mailto.status = false THEN 1 ELSE 0 END) as false_count'
// // ))
// // .leftJoin('management', 'management.id', 'mailto.management_id')
// // .where('mailto.created_at', '>', new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000).toISOString())
// // .groupBy('management.id', raw('EXTRACT(DOW FROM mailto.created_at)'))
// // .orderBy('management.id')
// // .orderByRaw('EXTRACT(DOW FROM mailto.created_at)')
// // .then(async (rows) => {

// // const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// // const mailCountByManagementAndDay = {};

// // for (const row of rows) {
// // const managementId = row.management_id;
// // const dayIndex = Number(row.day);

// // const name = await Management.query().where('id', managementId).first().then((rows:any) => rows.name);

// // if (!mailCountByManagementAndDay[name]) {
// //   mailCountByManagementAndDay[name] = {
   
// //   };
// // }

// // // Initialize counts for each day if not present
// // if (!mailCountByManagementAndDay[name][dayNames[dayIndex]]) {
// //   mailCountByManagementAndDay[name][dayNames[dayIndex]] = {
// //     total: 0,
// //     close: 0,
// //     open: 0,
// //   };
// // }

// // // Update the counts for each day
// // mailCountByManagementAndDay[name][dayNames[dayIndex]].total += Number(row.total_count);
// // mailCountByManagementAndDay[name][dayNames[dayIndex]].close += Number(row.true_count);
// // mailCountByManagementAndDay[name][dayNames[dayIndex]].open += Number(row.false_count);
// // }

// // // Ensure that each day has an entry for every management
// // dayNames.forEach((dayName) => {
// // Object.values(mailCountByManagementAndDay).forEach((management:any) => {
// //   if (!management[dayName]) {
// //     management[dayName] = {
// //       total: 0,
// //       close: 0,
// //       open: 0,
// //     };
// //   }
// // });
// // });

// // return mailCountByManagementAndDay;
// // }
// );
// // const mailStatisticsto = await MailTo.query()
// // //group by status to get total and close and open
// // .select('status', raw('COUNT(*) as count'))
// // .groupBy('status')
// // .then((rows) =>  rows); 
// // const mailStatisticstotal = await MailTo.query()
// // //count all mails
// // .count()
// // .then((rows: any) => Number(rows[0].count))

      


//     const statistics = {
//       // mailStatisticsto,
//       // mailStatisticstotal,
//       //   mail,
//       //   users,
//       //   Mailtype,
//       //   todaymail
//       //   ,todayusers
//       //   ,Departments,
//       //   company,
//       //   managment,
//       //   mailCountsByDay,
     
//       //   mailto:mailStatistics,
     

//     }

//     res.json(statistics)
// }


