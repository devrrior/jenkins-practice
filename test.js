const request = require("supertest");
const express = require("express");

const app = express();
app.get("/api/v1/welcome", (req, res) => {
  res.status(200).send("Hello, world1!");
});

describe("GET /api/v1/welcome", () => {
  it("should return welcome message", (done) => {
    request(app).get("/api/v1/welcome").expect("Hello, world!1").end(done);
  });
});
