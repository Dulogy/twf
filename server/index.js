const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const db = require("./Config/mongoose");
app.use(cors());
const mainRoutes = require("./Routes/index.js");
app.use("/", mainRoutes);

app.listen(port, function (err) {
  if (err) {
    return console.log("error : ", err);
  }
  return console.log("app is running at port : ", port);
});
