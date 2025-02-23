const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>AYO</h1>");
});

app.get("/profile/:name", (req, res) => {
  res.send(`<h1> Welcome ${req.params.name}</h1>`);
});

app.listen(8080, () => console.log("server is running on port 8080"));
