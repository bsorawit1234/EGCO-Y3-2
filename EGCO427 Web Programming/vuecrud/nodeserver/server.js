var cors = require("cors");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

port = process.env.PORT || 3000;

User = require("./api/models/userListModel");

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/Userdb', function(err) {
//     if (err) {
//         console.log('Error in Mongoose connection')
//         throw err
//     }
//     console.log('Mongoose connected')
// }
// )

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/UserDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

connectDB();

var routes = require("./api/routes/userListRoutes");
routes(app);
app.listen(port);
console.log("User list server started on: " + port);
