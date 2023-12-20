import { Knex } from "knex";

const table_name = 'employmentCommittees'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(table_name, (table) => {
        table.increments('id').primary()    
   
        table.string('file').nullable()
        //employ_id
        table.integer('employ_id').unsigned().nullable()
        .references('id').inTable('employ')
        



        table.uuid('user_id').nullable()
        .references('id').inTable('user')
        table.boolean('status').defaultTo(true).notNullable()

        table.timestamp('created_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table_name)
}

