import {Knex} from "knex";

const table_name = 'user'

//alter
export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable(table_name, (table) => {
        table.string('type').defaultTo('home').notNullable()
    })
}
export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable(table_name, (table) => {
        table.dropColumn('type')
    })
}   