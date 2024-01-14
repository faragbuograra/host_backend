
import Objection, { Model, QueryBuilderType } from 'objection'
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'

export default class Decisions extends TimestampedModel {

    // Table name
    static tableName = 'decisions'
    static defaultSort = 'name'

    // Table columns
    id!: number
    name!: string 
    status!:boolean | string

    static jsonSchema = {
        type: 'object',
        required: [ 'name' ],
        properties: {
            name: { type: 'string', minLength: 1 }
        }
    }

    // Formats img and thumb fields when existing model value returns from database

    $parseDatabaseJson(json: Objection.Pojo): Objection.Pojo {
        json       = super.$parseDatabaseJson(json);
        json.file   = json.file != null ? `${DOMAIN}/uploads/files/${json.file}` : null

        

        return json
    }
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

