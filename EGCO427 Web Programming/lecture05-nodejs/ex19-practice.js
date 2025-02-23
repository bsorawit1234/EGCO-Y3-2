const express = require("express");
const app = express();
const fs = require("fs");
const crypto = require("crypto");

const data = JSON.parse(fs.readFileSync("users.json", "utf-8"));
const users = data.users;

const getUserByID = (id) => {
  return users.find((user) => user.id == id);
};

app.get("/profile/:id", (req, res) => {
  const user = getUserByID(req.params.id);

  if (user == null) {
    return res.status(404).send("User not found");
  }

  const hashedPass = crypto
    .createHash("sha1")
    .update(user.password)
    .digest("hex");

  user.password = hashedPass;

  res.send(user);
});

app.listen("8080", () => console.log("Server is running on port 8080"));
