
import Objection, { Model, QueryBuilderType } from 'objection'
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'

export default class EmployPersonalCommitments extends TimestampedModel {

    // Table name
    static tableName = 'employPersonalCommitments'
    static defaultSort = 'title'

    // Table columns
    id!: number
    title!: string 
    status!:boolean | string

    static jsonSchema = {
        type: 'object',
      
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
    $parseDatabaseJson(json: Objection.Pojo): Objection.Pojo {
        json       = super.$parseDatabaseJson(json);
        json.file   = json.file != null ? `${DOMAIN}/uploads/files/${json.file}` : null

        

        return json
    }
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
