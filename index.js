const express = require("express");
const cors = require("cors");

var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.get("/api", (req, res) => {
  res.status(200).json("hello");
});
app.listen(8080, () => {
  console.log("sever is running!");
});
