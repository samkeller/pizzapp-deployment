import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("pizzas", (table) => {
        table.string("size").notNullable().defaultTo("M");
    });
}


export async function down(knex: Knex): Promise<void> {
}

