const supertest = require("supertest");
const app = require("../app");
const server = require("../server");
const db = require("../utils/database");

const token = "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZHJpZ29AZW1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMDgkS1dEdVJYM0k0TElMMmhIN01xRENpT0tmRE5LVHN1SThDbDBnT1N6RlEuOVdUZUhTLnRFNWUiLCJpYXQiOjE2NzUzMDU4MTZ9.aVnqbt77Yy3GcUfcp3JROWduDXQO4e1E2pia1qyLBvT1lHHfW3zOf5ZR10UbnFPgWbfnSnQOXRjQyPQ-HDbuSQ" 

const api = supertest(app);

// probar que el endpoint devuelve un json

describe("Pruebas para el endpoint de users", () => {

  test("Probar que un get a users devuelve un json" , async() => {
    await api
    .get("/api/v1/user/1")
    .set({Application: token})
    .expect(200)
    .expect("Content-Type", /application\/json/);
  });

  test("Probar que un get a users devuelve un arreglo", async () => {
    const { body } = await api
    .get("/api/v1/user/1")
    .set({Application: token});
    expect(body).toBeInstanceOf(Object);
  });
});

afterAll(() => {
 
  db.close();
})