const { MongoClient } = require("mongodb");

// connection db
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "Student";

const main = async () => {
  //desktop.postman.com/?desktopVersion=11.34.4&userId=38027714&teamId=5408207&region=us
  https: await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("student_records");

  const data = [
    {
      name: "Bob",
      courseid: "egci111",
      coursename: "computer programming",
      mark: 80,
    },
    {
      name: "Tom",
      courseid: "egci111",
      coursename: "computer programming",
      mark: 50,
    },
    {
      name: "Sue",
      courseid: "egci427",
      coursename: "Web programming",
      mark: 90,
    },
    {
      name: "John",
      courseid: "egci427",
      coursename: "Web programming",
      mark: 70,
    },
    {
      name: "Jame",
      courseid: "egci472",
      coursename: "Web programming",
      mark: 60,
    },
  ];

  const insertedResult = await collection.insertMany(data);
  console.log("InsertedResult => ", insertedResult);

  // 3a
  const query3a = { coursename: { $regex: /Computer Programming/i } };
  const result3a = await collection.find(query3a).toArray();
  console.log("Result => ", result3a);

  // 3b
  const query3b = { mark: { $gt: 60 } };
  const result3b = await collection.find(query3b).toArray();
  console.log("Result => ", result3b);

  // 3c
  const query3c = { name: /^J/ };
  const result3c = await collection.find(query3c).toArray();
  console.log("Result => ", result3c);

  return "done";
};

main()
  .then(console.log("Success"))
  .catch((err) => console.err(err));
