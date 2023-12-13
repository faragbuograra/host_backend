
import Objection, { Model, QueryBuilderType } from 'objection'
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'

export default class EmployFunction extends TimestampedModel {

    // Table name
    static tableName = 'employFunction'
    static defaultSort = 'title'

    // Table columns
    id!: number
    title!: string 
    status!:boolean | string

    static jsonSchema = {
        type: 'object',
        required: [ 'title' ],
        properties: {
            title: { type: 'string', minLength: 1 }
        }
    }

    // Formats img and thumb fields when existing model value returns from database


    /*
     * ---------------------------------------------------------------------
     * Model Relations
     * ---------------------------------------------------------------------
     */
    
    // One-to-many relation with Subcategory model
    static relationMappings = {
    
        // sub_categorys: {
        //     relation: Model.HasManyRelation,
        //     modelClass: Sub_Category,
        //     join: {
        //         from: 'categorys.id',
        //         to: 'subcategorys.categorys_id' 
        //     },
        //     filter: (qb: QueryBuilderType<Sub_Category>) => qb.select('subcategorys.name')
        // },
       
       


    
    }
       
       
    

        
         

        
}

