import { Knex } from "knex";

const table_name = 'reservations'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(table_name, (table) => {
        table.increments('id').primary()    
        table.integer('Patient_id').nullable().references('id').inTable('user')
        table.string('title').nullable()
        table.integer('doctor_id').nullable().references('id').inTable('user')
table.integer('user_id').nullable().references('id').inTable('user')
table.string('price').nullable()
table.string('date').nullable()
table.string('hour').nullable()

        table.boolean('status').defaultTo(true).notNullable()

        table.timestamp('created_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table_name)
}

