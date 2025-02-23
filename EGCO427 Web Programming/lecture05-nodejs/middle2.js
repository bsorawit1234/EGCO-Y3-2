const { MongoClient } = require("mongodb");

// connection db
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "Product";

const main = async () => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("products");

  const obj = [
    {
      name: "Book",
      price: 10,
    },
    {
      name: "Pencil",
      price: 5,
    },
    {
      name: "Calculator",
      price: 40,
    },
    {
      name: "Notebook",
      price: 15,
    },
    {
      name: "T-Shirt",
      price: 20,
    },
    {
      name: "Jacket",
      price: 20,
    },
  ];

  //   const insertResult = await collection.insertMany(obj);
  //   console.log("Inserted doucments =>", insertResult);

  //   const findResult = await collection.find({});
  //   console.log(findResult);

  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  //   const query = { name: /^C/ };
  //   const findResult = await collection.find(query).toArray();
  //   console.log("Found documnet =>", findResult);

  //   const key = { name: -1 };
  //   const findResult = await collection.find().sort(key).toArray();
  //   console.log("Found documnet =>", findResult);

  //   const query = { name: "Book" };
  //   const findResult = await collection.deleteOne(query);
  //   console.log("Found documnet =>", findResult);

  //   const query = { name: /^T/ };
  //   const findResult = await collection.deleteOne(query);
  //   console.log("Found documnet =>", findResult);

  const query = { name: "Cofee Mug" };
  const newValue = { $set: { name: "Tea Mug", price: 25 } };
  const updateResult = await collection.updateOne(query, newValue);
  console.log("Updated document => ", updateResult);

  return "done";
};

main()
  .then(console.log("Success"))
  .catch(console.error)
  .finally(() => client.close());
