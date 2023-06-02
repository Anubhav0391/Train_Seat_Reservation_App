const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const seatsRouter = require("./routes/seats.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/seats", seatsRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
});