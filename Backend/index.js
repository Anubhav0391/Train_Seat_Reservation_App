const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const seatsRouter = require("./routes/seats.routes");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/seats", seatsRouter);

app.get("/", (req, res) => {
  res.send(
    `<u>
      <h1 style="text-align:center;margin:50px;">Train Seats Reservation API</h1>
    </u>
    <h2 style="text-align:center;margin:50px;">
      GET : <a href="http://localhost:8080/seats"> /seats</a>
    </h2>
    <h2 style="text-align:center;margin:50px;">
      PATCH : <a href="http://localhost:8080/seats/reserve"> /seats/reserve</a>
    </h2>
    <h2 style="text-align:center;margin-left:-500px;" >Instructions :- </h2>
    <h3 style="width:fit-content;margin:auto">
      <ol >
        <li>User can book the seats at  [ /seats/reserve ].</li>
        <li>You have to provide the number of required seats in body of the request.</li>
        <li>An user can book upto 7 seats at a time. </li>
        <li>In the backend priority will be to book seats in single row.</li>
        <li>If required seats are not available i single row, seats will be booked in nearby rows.</li>
      </ol>
    </h3>`
  );
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
});
