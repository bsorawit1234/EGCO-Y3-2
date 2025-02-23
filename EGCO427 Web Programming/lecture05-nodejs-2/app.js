const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

app.get("/getUsers", async (req, res) => {
  await client.connect();
  const dbName = "StudentDB";
  const db = client.db(dbName);
  const collection = db.collection("Students");

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  res.json(findResult);
});

app.get("/getUsers/:id", (req, res) => {
  fs.readFile(__dirname + "/user.json", "utf-8", (err, data) => {
    let obj = JSON.parse(data);
    for (let key in obj) {
      if (obj[key].id == req.params.id) {
        let user = JSON.stringify(obj[key]);
        console.log(user);
        res.end(user);
      }
    }
    // res.end(obj);
  });
});

const user = {
  user4: {
    name: "mohit",
    password: "password04",
    professtion: "teacher",
    id: 4,
  },
};

app.post("/addUser", (req, res) => {
  fs.readFile(__dirname + "/user.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    data["user4"] = user.user4;
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.delete("/deleteUser/:id", (req, res) => {
  fs.readFile(__dirname + "/user.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    delete data[`user${req.params.id}`];
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Application run at http://%s:%s", host, port);
});

// Database Name
