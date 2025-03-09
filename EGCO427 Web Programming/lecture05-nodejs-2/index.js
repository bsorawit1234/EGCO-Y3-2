const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");

app.use(express.json());

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

app.get("/api", (req, res) => {
  res.json({
    description: "My API. Please authenicate.",
  });
});

app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "my-secret-key", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        description: "Protected information. Congrats",
        data: data,
      });
    }
  });
});

app.post("/api/login", async (req, res) => {
  await client.connect();
  const dbName = "UserDB";
  const db = client.db(dbName);
  const collection = db.collection("User");

  //   const user = await collection.find({}).toArray();
  //   console.log(user[0]);
  const { username, password } = req.body;

  const account = await collection.findOne({ username: username });

  if (password != account.password) {
    res.status(400).send({
      message: "Invalid Username or Password",
      user: {
        username,
        password,
      },
    });
  }

  const token = jwt.sign({ username: username }, "my-secret-key");
  res.json({
    message: "Authenicated!",
    token: token,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
