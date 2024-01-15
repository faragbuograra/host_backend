
import Objection, { Model, QueryBuilderType } from 'objection'
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'
import Department from '../Department/department.model'
import Management from '../Decisions/decisions.model'
import EmploymentDocuments from '../EmploymentDocuments/EmploymentDocuments.model'
import EmployFunction from '../EmployFunction/EmployFunction.model'
import EmploymentAcademicQualifications from '../EmploymentAcademicQualifications/EmploymentAcademicQualifications.model'
import EmploymentTransportation from '../EmploymentTransportation/EmploymentTransportation.model'
import EmploymentPromotions from '../EmploymentPromotions/EmploymentPromotions.model'
import EmploymentHealthInsurance from '../EmploymentHealthInsurance/EmploymentHealthInsurance.model'
import EmploymentCommittees from '../EmploymentCommittees/EmploymentCommittees.model'
import EmploymentVacations from '../EmploymentVacations/EmploymentVacations.model'
import EmploymentPenalties from '../EmploymentPenalties/EmploymentPenalties.model'
import EmployRightToSigs from '../EmployRightToSign/EmployRightToSign.model'
import EmployPerformanceEvaluation from '../EmployPerformanceEvaluation/EmployPerformanceEvaluation.model'
import EmployPersonalCommitments from '../EmployPersonalCommitments/EmployPersonalCommitments.model'
import EmployEct from '../EmployEct/EmployEct.model'
import Employmentscientificsessions from '../Employmentscientificsessions/Employmentscientificsessions.model'

export default class Employ extends TimestampedModel {

    // Table name
    static tableName = 'employ'
    static defaultSort = 'name'

    // Table columns
    id!: number
    name!: string 
    from!:string|number
    to!:string|number
    status!:boolean | string
    department_id!:number
    management_id!:number
    user_id!:string
    number!:number|string


    static jsonSchema = {
        type: 'object',
        required: [ 'name' ],
        properties: {
            name: { type: 'string', minLength: 1 }
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
    
       
      
        employmentDocuments: {
            relation: Model.HasManyRelation,
            modelClass: EmploymentDocuments,
            join: {
                from: 'employ.id',
                to: 'employmentDocuments.employ_id'
            }
        },
        employFunction: {
            relation: Model.HasManyRelation,
            modelClass: EmployFunction,
            join: {
                from: 'employ.id',
                to: 'employFunction.employ_id'
            }

        },
        employmentAcademicQualifications:
        {
            relation: Model.HasManyRelation,
            modelClass: EmploymentAcademicQualifications,
            join: {
                from: 'employ.id',
                to: 'employmentAcademicQualifications.employ_id'
            }
        },
        employmentTransportation:{
            relation: Model.HasManyRelation,
            modelClass: EmploymentTransportation,
            join: {
                from: 'employ.id',
                to: 'employmentTransportation.employ_id'
            }
        },
        employmentPromotions:{
            relation: Model.HasManyRelation,
            modelClass: EmploymentPromotions,
            join: {
                from: 'employ.id',
                to: 'employmentPromotions.employ_id'
            }
        },
        employmentHealthInsurance:{
            relation: Model.HasManyRelation,
            modelClass: EmploymentHealthInsurance,
            join: {
                from: 'employ.id',
                to: 'employmentHealthInsurance.employ_id'
            }
        },
        employmentCommittees:{
            relation: Model.HasManyRelation,
            modelClass: EmploymentCommittees,
            join: {
                from: 'employ.id',
                to: 'employmentCommittees.employ_id'
            }
        }
        ,
        employmentVacations:{
            relation: Model.HasManyRelation,
            modelClass: EmploymentVacations,
            join: {
                from: 'employ.id',
                to: 'employmentVacations.employ_id'
            }
        },
        employmentPenalties:{
            relation: Model.HasManyRelation,
            modelClass: EmploymentPenalties,
            join: {
                from: 'employ.id',
                to: 'employmentPenalties.employ_id'
            }
        },employRightToSign:{
            relation: Model.HasManyRelation,
            modelClass: EmployRightToSigs,
            join: {
                from: 'employ.id',
                to: 'employRightToSign.employ_id'
            }

        },employPerformanceEvaluation:{
            relation: Model.HasManyRelation,
            modelClass: EmployPerformanceEvaluation,
            join: {
                from: 'employ.id',
                to: 'employPerformanceEvaluation.employ_id'
            }
        },employPersonalCommitments:{
            relation: Model.HasManyRelation,
            modelClass: EmployPersonalCommitments,
            join: {
                from: 'employ.id',
                to: 'employPersonalCommitments.employ_id'
            }
        },employEct:{
            relation: Model.HasManyRelation,
            modelClass: EmployEct,
            join: {
                from: 'employ.id',
                to: 'employEct.employ_id'
            }
        },employmentscientificsessions:{
            relation: Model.HasManyRelation,
            modelClass: Employmentscientificsessions,
            join: {
                from: 'employ.id',
                to: 'employmentscientificsessions.employ_id'
            }
        }
    
    }
       
       
    

        
         

        
}

