import supertest from 'supertest';
import { router } from '../api/pizzas';
import express from 'express';



describe('Integration test', () => {


    it('should display array on route /api/pizzas', async () => {

        const client = supertest(express().use(router));

        const response = await client.get('/pizzas');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);

    });

    it('should return pizzas', async () => {
        const request = supertest(express().use(router))
        const response = await request.get('/pizzas')

        expect(response.status).toBe(200)
    });


    it('should create pizza', async () => {
        const request = supertest(router)
        const pizza = {
            name: 'peperoni',
            price: 13,
            size: "M"
        }
    });

    test("It should response pizza with id", async () => {
        const request = supertest(express().use(router))
        const response = await request.get('/pizzas/1')

        expect(response.status).toBe(200);
    });
});


