import { Knex } from "knex";

const table_name = 'log'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(table_name, (table) => {
        table.increments('id').primary()
        //user_id
        table.uuid('user_id').nullable()
        .references('id').inTable('user')
        table.string('action').nullable()
        table.string('ip').nullable()
        table.string('note').nullable()
        table.timestamp('created_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table_name)
}

