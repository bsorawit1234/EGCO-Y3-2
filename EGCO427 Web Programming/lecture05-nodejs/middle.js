var express = require("express");
var app = express();

app.use(express.json());

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.post("/users", (req, res) => {
  const data = { name: req.body.name };

  res.send(JSON.stringify(data));
});

app.listen(8080);
