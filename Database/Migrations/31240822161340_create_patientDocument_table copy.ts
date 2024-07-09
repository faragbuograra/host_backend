import { Knex } from "knex";

const table_name = 'patientDocument'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(table_name, (table) => {
        table.increments('id').primary()    
        table.string('name').nullable()
        table.string('file').nullable()
        table.string('type').nullable()
        table.integer('Patient_id').nullable().references('id').inTable('user')
        table.boolean('status').defaultTo(true).notNullable()
        table.timestamp('created_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.raw('now()')).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table_name)
}

