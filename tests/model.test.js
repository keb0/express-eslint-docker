const request = require("supertest");
const app = require("../app");

describe("check elasticsearch", () => {
  test("it returns status code is 200", async () => {
    const response = await request(app).get("/api");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      data: 5,
      test: [
        { abc: "abc", tie_breaker_id: "abc" },
        { abc: "456", tie_breaker_id: "456" },
        { abc: "789", tie_breaker_id: "789" },
        { abc: "123", tie_breaker_id: "123" },
        { abc: "efg", tie_breaker_id: "efg" }
      ]
    });
  });
});
