import supertest from 'supertest';
import { router } from '../api/pizzas';
import express from 'express';



describe('Integration test', () => {


    it('should display pizzas on route /api/pizzas', async () => {

        const client = supertest(express().use(router));

        const response = await client.get('/pizzas');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);

    });


});
