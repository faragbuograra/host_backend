

import { TimestampedModel } from "../Shared/TimestampedModel";

export default class Feadback extends TimestampedModel {
  // Table name
  static tableName = "feedback";
  static defaultSort = "name";

  // Table columns
  id!: string;
  type!: string | null;
  dec!: string | null;
  users_id!: string | null;

  status!: boolean | string;

  static jsonSchema = {
    type: "object",
    // required: [ "type", "dec"],
    properties: {
     
        type: { type: "string", minLength: 1 },
        dec: { type: "string", minLength: 1 },
        // users_id: { type: "string", minLength: 1 },
    },
  };

  // Formats img and thumb fields when existing model value returns from database
  // $parseDatabaseJson(json: Objection.Pojo): Objection.Pojo {
  //     json       = super.$parseDatabaseJson(json);
  //     json.img   = json.img != null ? `${ DOMAIN }/uploads/actors/${ json.img }` : null
  //     json.thumb = json.thumb != null ? `${ DOMAIN }/uploads/actors/thumbs/${ json.thumb }` : null
  //     return json
  // }

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
