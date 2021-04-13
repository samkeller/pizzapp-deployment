import supertest from 'supertest';
import { router } from '../api/pizzas';
import express from 'express';
import { database } from '../database';

describe('Functional test example', () => {
    beforeAll(async () => {
        await database.migrate.latest();
    });

    afterAll(async () => {
        await database.destroy();
    });

    it('should display pizzas on route /api/pizzas', async () => {

        const client = supertest(express().use(router));

        const response = await client.get('/pizzas');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);

    });


});
