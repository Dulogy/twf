const mongoose = require("mongoose"); // require the library
mongoose.connect("mongodb://127.0.0.1:27017/twf"); // connect to the database

const db = mongoose.connection; // acquire the connection

db.on("error", console.error.bind(console, "error connecting to db")); // message for any error

//up and running and print the message
db.once("open", function () {
  console.log("successfully connected to database");
});
