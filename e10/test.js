const request = require("supertest");
const app = require("../server");

describe("Registro de usuarios", () => {

test("Debe registrar un usuario", async () => {

const res = await request(app)
.post("/register")
.send({
name:"Juan",
email:"juan@test.com",
password:"123456"
});

expect(res.statusCode).toBe(201);
expect(res.body.message).toBe("Usuario registrado");

});

});