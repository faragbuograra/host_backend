import { Knex } from "knex";

const table_name = 'user'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(table_name, (table) => {
        table.increments('id').primary()
        table.string('username').unique().nullable()
        table.string('name').nullable()
        table.string('email').unique().nullable()
        table.string('phone').unique().nullable()
        table.string('address').nullable()
        table.string('sex').nullable()
        table.string('dob').nullable()

        table.string('password').nullable()
        table.boolean('status').defaultTo(true).notNullable()
        table.string('role').nullable()
        table.timestamp('created_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table_name)
}

