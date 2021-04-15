import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable('ingredient', function (table) {
        table.increments();
        table.string('name');
        table.timestamps();
        table.foreign('pizza_id');
      })
    await knex.schema.createTable('pizza_ingredient', table => {
        table.integer('pizza_id').references('pizzas.id');
        table.integer('ingredient_id').references('ingredient.id');
        table.unique(['pizza_id', 'ingredient_id']);
      })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable('pizza_ingredient');
   await knex.schema.dropTable('ingredient');

}

