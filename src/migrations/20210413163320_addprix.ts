import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("pizzas", (table) => {
        table.float("prix").notNullable().defaultTo(12);
    });
}


export async function down(knex: Knex): Promise<void> {
    
}

