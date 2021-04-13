import { Router } from "express";
import { PizzaModel } from "../database";

export const router = Router();

router.get("/pizzas", async (req, res) => {
  const pizzas = await PizzaModel.query();
  res.json(pizzas)

});

router.get("/pizzas/:id", async (req, res) => {
  const id = req.params.id
  const pizza = await PizzaModel.query().findById(id);
  res.json(pizza)
})

router.post("/pizzas", async (req, res) => {
  const { name, prix } = req.body;
  const pizza = await PizzaModel.query()
    .insert({
      name,
      prix
    })
    .returning("*");
  res.json(pizza);
});

router.delete('/pizzas/:id', async (req, res) => {
  const id = req.params.id
  const pizza = await PizzaModel.query().deleteById(id)

  res.json(pizza)
})


router.patch('/pizzas/:id', async (req, res) => {
  const { name } = req.body;
  const id = req.params.id;
  const pizza = await PizzaModel.query().findById(id).patch({
    name,
  }).returning("*")
  res.json(pizza)
})

export default router;