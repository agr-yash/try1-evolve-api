require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require("cors");

const PORT = process.env.PORT || 5001;

const users_routes = require("./routes/users");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi, i am live");
});

app.use("/api/v1", users_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Server is listening on 5001 port");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
