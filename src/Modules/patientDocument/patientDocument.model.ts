
import Objection, { Model, QueryBuilderType } from 'objection'
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'

export default class PatientDocument extends TimestampedModel {

    // Table name
    static tableName = 'patientDocument'
    static defaultSort = 'name'

    // Table columns
    id!: number
    name!: string 
    status!:boolean | string

    static jsonSchema = {
        type: 'object',

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
   
    // One-to-many relation with Subcategory model
    static relationMappings = {
    
       
       
       


    
    }
       
       
    

        
         

        
}

