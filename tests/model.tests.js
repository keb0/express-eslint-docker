const request = require("supertest");
const app = require("../app");

describe("check elasticsearch", () => {
  test("it returns status code is 200", async () => {
    const response = await request(app).get("/api");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      count: 1,
      data: [
        { abc: "abc", tie_breaker_id: "abc" }
      ]
    });
  });
});
