const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();

app.get("/api", (req, res) => {
  res.status(200).json("hello");
});
app.listen(8080, () => {
  console.log("sever is running!");
});
