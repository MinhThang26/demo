const express = require("express");
const app = express();
app.get("/api", (req, res) => {
  res.status(200).json("hello");
});
app.listen(8000, () => {
  console.log("sever is running!");
});
