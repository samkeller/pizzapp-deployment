import supertest from 'supertest';
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


    it("It should return pizza with id", async () => {
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

    it('should delete pizza by id', async () => {
        const request = supertest(app)
        const response = await request.delete('/api/pizzas/1')

        expect(response.status).toEqual(200)
        expect(response.body).toBe(1);

    })

    it("should updated pizza by id", async () => {
        const request = supertest(app)
        const response =  await request
          .post("/api/pizzas")
          .send({
            name: "Another one",
            prix : 9.99,
            size: "M"

          });
        const updatedpizza = await supertest(app)
          .patch(`/api/pizzas/${response.body.id}`)
          .send({ name: "updated" });

        expect(updatedpizza.body.name).toBe("updated");
        expect(updatedpizza.body).toHaveProperty("id");
        expect(updatedpizza.status).toBe(200);

      });

});


