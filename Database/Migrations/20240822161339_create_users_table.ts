import { Knex } from "knex";

const table_name = 'user'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(table_name, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
        table.string('username').unique().nullable()
        table.string('name').unique().nullable()
        table.string('password').nullable()
        table.boolean('status').defaultTo(true).notNullable()
  //rolestring
        table.string('role').nullable()

        table.timestamp('created_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table_name)
}

