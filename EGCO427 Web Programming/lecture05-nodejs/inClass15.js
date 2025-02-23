const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/showForm", (req, res) => {
  res.sendFile(__dirname + "/ShowForm.html");
});

app.get("/showData", (req, res) => {
  const data = req.query;
  const path = `${__dirname}/output.json`;

  const readfile = fs.readFileSync(path, "utf-8");

  const result = {
    fname: data.fname,
    lname: data.lname,
    result: Number(data.input1) + Number(data.input2),
  };

  if (readfile.length == 0) {
    let results = [result];
    fs.writeFileSync(path, JSON.stringify(results));
    res.send(results);
  } else {
    let results = [...JSON.parse(readfile), result];
    fs.writeFileSync(path, JSON.stringify(results));
    res.send(results);
  }
});

app.listen(8080);
