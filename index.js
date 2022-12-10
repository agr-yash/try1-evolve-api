const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "Hello I am live",
  });
});

app.listen("5001", () => {
  console.log("Server is listening on 5001 port");
});
