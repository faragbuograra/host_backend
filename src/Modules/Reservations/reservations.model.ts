
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'

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
    
        // sub_categorys: {
        //     relation: Model.HasManyRelation,
        //     modelClass: Sub_Category,
        //     join: {
        //         from: 'categorys.id',
        //         to: 'subcategorys.categorys_id' 
        //     },
        //     filter: (qb: QueryBuilderReservations<Sub_Category>) => qb.select('subcategorys.name')
        // },
       
       


    
    }
       
       
    

        
         

        
}

