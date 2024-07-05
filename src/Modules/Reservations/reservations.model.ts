
import { Model ,QueryBuilderType} from "objection"
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'
import { User } from "../Users/user.model"

export default class Reservations extends TimestampedModel {

    // Table name
    static tableName = 'reservations'
    static defaultSort = 'name'

    // Table columns
    id!: number
    name!: string 
    status!:boolean | string

    static jsonSchema = {
        type: 'object',

       
    }

    // Formats img and thumb fields when existing model value returns from database


   
    // One-to-many relation with Subcategory model
    static relationMappings = {
    
        auth: {
            relation: Model.HasOneRelation,
            modelClass:User,
            join: {
                from: 'reservations.user_id',
                to: 'user.id'
            },
            filter: (qb: QueryBuilderType<User>) => qb.select('id', 'name')
        },
        doctor: {
            relation: Model.HasOneRelation,
            modelClass:User,
            join: {
                from: 'reservations.doctor_id',
                to: 'user.id'
            },
            filter: (qb: QueryBuilderType<User>) => qb.select('id', 'name')
        },
       
        patient: {
            relation: Model.HasOneRelation,
            modelClass:User,
            join: {
                from: 'reservations.Patient_id',
                to: 'user.id'
            },
            filter: (qb: QueryBuilderType<User>) => qb.select('id', 'name')
        },

    
    }
       
       
    

        
         

        
}

