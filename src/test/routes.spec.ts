import supertest from 'supertest';
import { router } from '../api/pizzas';

describe('Functional test example', () => {


    it('should display pizzas on route /api/pizzas', async () => {

        const client = supertest(router);

        const response = await client.get('/pizzas');
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);

    });

});
