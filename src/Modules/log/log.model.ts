import Objection, { Model, QueryBuilderType } from 'objection'
import { DOMAIN }                             from "../../config"

import { TimestampedModel }                   from '../Shared/TimestampedModel'

export default class Log extends TimestampedModel {

    // Table name
    static tableName = 'log'
    static defaultSort = 'name'

    // Table columns
    id!: string
    ip!: string | null
    note!:boolean | string
    action!: string | null
    user_id!: string | null
    static jsonSchema = {
        type: 'object',
  
        properties: {
            name: { type: 'string', minLength: 1 }
        }
    }

    // Formats img and thumb fields when existing model value returns from database
    $parseDatabaseJson(json: Objection.Pojo): Objection.Pojo {
        json       = super.$parseDatabaseJson(json);
        // json.img   = json.img != null ? `${ DOMAIN }/uploads/shops/${ json.img }` : null
      
        return json
    }

    /*
     * ---------------------------------------------------------------------
     * Model Relations
     * ---------------------------------------------------------------------
     */
    // static relationMappings = () => ({
    //     movies: {
    //         relation: Model.ManyToManyRelation,
    //         modelClass: Movie,
    //         join: {
    //             from: 'actors.id',
    //             through: {
    //                 from: 'movie_actors.actor_id',
    //                 to: 'movie_actors.movie_id',
    //                 extra: [ 'as' ]
    //             },
    //             to: 'movies.id'
    //         },
    //         filter: (qb: QueryBuilderType<Movie>) => qb.select('movies.id', 'movies.title', 'movies.img', 'movies.thumb')
    //     }
    // })
}

