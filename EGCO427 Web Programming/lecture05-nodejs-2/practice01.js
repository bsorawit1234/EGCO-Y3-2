const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

app.use(express.json());

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

app.get("/showMajor/:major", async (req, res) => {
  await client.connect();
  const dbName = "StudentDB";
  const db = client.db(dbName);
  const collection = db.collection("Students");

  const regex = new RegExp(req.params.major, "i");
  const findResult = await collection
    .find({
      major: { $regex: regex },
    })
    .toArray();
  console.log("Found documents =>", findResult);
  res.json(findResult);
});

app.get("/findageless/:age", async (req, res) => {
  await client.connect();
  const dbName = "StudentDB";
  const db = client.db(dbName);
  const collection = db.collection("Students");

  const findResult = await collection
    .find({
      age: {
        $lt: Number(req.params.age),
      },
    })
    .sort({ age: -1 })
    .toArray();

  console.log("Found documents =>", findResult);
  res.json(findResult);
});

app.post("/updateLastname/:old/:new", async (req, res) => {
  await client.connect();
  const dbName = "StudentDB";
  const db = client.db(dbName);
  const collection = db.collection("Students");

  const updated = await collection.updateMany(
    { lastname: req.params.old },
    { $set: { lastname: req.params.new } }
  );

  if (updated.modifiedCount === 0) {
    return res.status(404).json({ message: "No matching documents found." });
  }

  const updatedResult = await collection
    .find({ lastname: req.params.new })
    .toArray();

  console.log("Updated documents =>", updatedResult);
  res.json(updatedResult);
});

// 4) Insert new student {id: 5, firstname: "Adam", lastname: "Zoo", age: 22, major: "Math"}
// 1) http://localhost:8081/showMajor/Science
// 2) http://localhost:8081/findageless/20
// 3) http://localhost:8081/updateLastname/Lamb/Fox
// 4) http://localhost:8081/insertStudent

app.post("/insertStudent", async (req, res) => {
  await client.connect();
  const dbName = "StudentDB";
  const db = client.db(dbName);
  const collection = db.collection("Students");

  const obj = req.body;

  const insertedResult = await collection.insertOne(obj);

  console.log("inserted documents =>", insertedResult);
  res.json(insertedResult);
});

app.listen(8081, function () {
  console.log("Application running");
});
