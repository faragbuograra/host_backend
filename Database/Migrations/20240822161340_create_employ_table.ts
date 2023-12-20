import { Knex } from "knex";

const table_name = 'employ'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(table_name, (table) => {
        table.increments('id').primary()
        table.integer('number').unique().notNullable()
        table.string('name').notNullable()


        table.integer('management_id').unsigned().nullable()
        .references('id').inTable('management')
        table.integer('department_id').unsigned().nullable()
        .references('id').inTable('department')

        table.string('type').nullable()
        table.string('typeemploy').nullable()
        table.boolean('status').defaultTo(true).notNullable()
        //user_id
        table.uuid('user_id').nullable()
        .references('id').inTable('user')

        table.timestamp('created_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table_name)
}

