
// import Objection, { Model, QueryBuilderType } from 'objection'
// import { DOMAIN }                             from "../../config"

// import { TimestampedModel }                   from '../Shared/TimestampedModel'
// import MailAction from '../MailAction/mailaction.model'
// import MailType from '../MailType/mailtype.model'
// import MailCategory from '../MailCategory/mailcategory.model'
// import { User } from '../Users/user.model'
// import Management from '../Management/management.model'
// import MailTo from '../MailTo/mailto.model'
// import MailFile from '../MailFile/mailfile.model'
// import MailCopy from '../MailCopy/mailcopy.model'
// import MailLink from '../MailLink/maillink.model'

// export default class Mail extends TimestampedModel {

//     // Table name
//     static tableName = 'mail'
//     static defaultSort = 'name'

//     // Table columns
//     id!: number
//     name!: string | null
//     status!:boolean | string
//     created_at_array!:Date | string
//     max_id!: number
//     number!:number| string
//     date!:Date | string
//     day!:string | number
//     mailtype_id!:number | string
//     mailcategory_id!:number | string
//     path!:string | null
//     subject!:string | null
//     description!:string | null
//     management_id_from!:number | string
//     user_id_from!:number | string
//     supercompany_id!:number | string
//     company_id!:number | string
//     regsir!:string | null
//     mailcopy!:any | null
//     count!:number | string
// copy!:object | null
// mailto!:any | null
//     static jsonSchema = {
//         type: 'object',
    
//         properties: {
//             name: { type: 'string', minLength: 1 }
//         }
//     }

//     // Formats img and thumb fields when existing model value returns from database
//     // $parseDatabaseJson(json: Objection.Pojo): Objection.Pojo {
//     //     json       = super.$parseDatabaseJson(json);
//     //     json.img   = json.img != null ? `${ DOMAIN }/uploads/categorys/${ json.img }` : null
      
//     //     return json
//     // }

//     /*
//      * ---------------------------------------------------------------------
//      * Model Relations
//      * ---------------------------------------------------------------------
//      */
    
//     // One-to-many relation with Subcategory model
//     static relationMappings = {
    
//         mailAction: {
//             relation: Model.HasManyRelation,
//             modelClass: MailAction,
//             join: {
//                 from: 'mail.mailaction_id',
//                 to: 'mailaction.id' 
//             },
//             filter: (qb: QueryBuilderType<MailAction>) => qb.select('mailaction.name')
//         },
//         mailType: {
//             relation: Model.HasManyRelation,
//             modelClass: MailType,
//             join: {
//                 from: 'mail.mailtype_id',
//                 to: 'mailtype.id' 
//             },
//             filter: (qb: QueryBuilderType<MailType>) => qb.select('mailtype.name')
//         },
//         mailCatogory: {
//             relation: Model.HasManyRelation,
//             modelClass: MailCategory,
//             join: {
//                 from: 'mail.mailcategory_id',
//                 to: 'mailcategory.id' 
//             },
//             filter: (qb: QueryBuilderType<MailType>) => qb.select('mailcategory.name')
       
//         },
//         user:{
//             relation: Model.HasManyRelation,
//             modelClass: User,
//             join: {
//                 from: 'mail.user_id_from',
//                 to: 'user.id' 
//             },
//             filter: (qb: QueryBuilderType<MailType>) => qb.select('user.username')
//         },
//         management:{
//             relation: Model.HasManyRelation,
//             modelClass: Management,
//             join: {
//                 from: 'mail.management_id_from',
//                 to: 'management.id' 
//             },
//             filter: (qb: QueryBuilderType<MailType>) => qb.select('management.name')
//         },
//         mailto:{
//             relation: Model.HasManyRelation,
//             modelClass: MailTo,
//             join: {
//                 from: 'mail.id',
//                 to: 'mailto.mail_id' 
//             },
//             filter: (qb: QueryBuilderType<MailTo>) => qb.select('mailto.*')
//         }, mailfile:{
//             relation: Model.HasManyRelation,
//             modelClass: MailFile,
//             join: {
//                 from: 'mail.id',
//                 to: 'mailfile.mail_id'
//             },
//             filter: (qb: QueryBuilderType<MailFile>) => qb.select('mailfile.*')
//         },        mailcopy:{
//             relation: Model.HasManyRelation,
//             modelClass: MailCopy,
//             join: {
//                 from: 'mail.id',
//                 to: 'mailcopy.mail_id' 
//             },
//             filter: (qb: QueryBuilderType<MailCopy>) => qb.select('mailcopy.*')
//         },
//         maillink:{
//             relation: Model.HasManyRelation,
//             modelClass: MailLink,
//             join: {
//                 from: 'mail.id',
//                 to: 'maillink.mail_id_first' 
//             },
//             filter: (qb: QueryBuilderType<MailLink>) => qb.select('maillink.*')
//         },
//     }
       
       
    

        
         

        
// }

