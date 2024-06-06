const request = require("supertest");
const express = require("express");

const app = express();
app.get("/api/v1/welcome", (req, res) => {
  res.status(200).send("Hello, world!");
});

describe("GET /api/v1/welcome", () => {
  it("should return welcome message", (done) => {
    request(app).get("/api/v1/welcome").expect("Hello, world!").end(done);
  });
});
