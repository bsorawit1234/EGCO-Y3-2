const http = require("http");
const fs = require("fs");

const myUser = {
  name: "AYO",
  job: "Wassup",
  age: 30,
};

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(myUser));
  })
  .listen(8080);
