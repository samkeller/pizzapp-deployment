import supertest from 'supertest';
import { router } from '../api/pizzas';
import express from 'express';
import app from '../app'
import { database } from '../database';



describe('Integration test', () => {

    beforeAll(async () => {
        await database.migrate.latest();
    });

    afterAll(async () => {
        await database.destroy();
    });


    it('should display array on route /api/pizzas', async () => {
        const client = supertest(app)

        const response = await client.get('/api/pizzas');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);

    });

    it('should return pizzas', async () => {
        const request = supertest(app)
        const response = await request.get('/api/pizzas')

        expect(response.status).toBe(200)
    });


    test("It should response pizza with id", async () => {
        const request = supertest(app)
        const response = await request.get('/api/pizzas/1')

        expect(response.status).toBe(200);
    });

    it('should create a new pizza', async () => {

        const request = supertest(app)
        const response = await request.post('/api/pizzas')
            .send({
                id: 1,
                name: 'pizza test',
                price: 9.99,
                size: "M"
            })

        expect(response.status).toEqual(200)
        expect(response.body).toBeInstanceOf(Object);

    })

});


