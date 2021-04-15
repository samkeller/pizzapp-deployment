import { Model } from "objection";
import Knex from "knex";
import config from "./knexfile";
export const database = Knex(config);

Model.knex(database);

export class PizzaModel extends Model {
  id!: number;
  name!: string;
  prix!: number;
  size!: string;

  static get tableName() {
    return "pizzas";
  }

  static get idColumn() {
    return "id";
  }
}

export class IngredientModel extends Model {
  id!: number;
  label!: string;

  static get tableName() {
    return "ingredient";
  }

  static get idColumn() {
    return "id";
  }

  static relationMappings = {
    pizzas: {
      relation: Model.ManyToManyRelation,
      modelClass: PizzaModel,
      join: {
        from: 'ingredient.id',
        through: {
          from: 'pizza_ingredient.ingredient_id',
          to: 'pizza_ingredient.pizza_id'
        },
        to: 'pizza.id'
      }
    }
  }
}