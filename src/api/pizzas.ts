import { Router } from "express";
import { PizzaModel } from "../database";

export const router = Router();

router.get("/pizzas", async (req, res) => {
  const pizzas = await PizzaModel.query();
  res.json(pizzas);
});

router.post("/pizzas", async (req, res) => {
  const { name } = req.body;
  const pizza = await PizzaModel.query()
    .insert({
      name,
    })
    .returning("*");
  res.json(pizza);
});

router.delete('/pizzas/:id', async (req, res) => {
    const id = req.body;
    const pizza = await PizzaModel.query(req.body.id);

    await pizza.remove();
});