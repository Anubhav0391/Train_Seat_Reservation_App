const express = require("express");
const SeatsModel = require("../models/seats.model");

const seatsRouter = express.Router();

//get all seats of the coach => /seat

seatsRouter.get("/", async (req, res) => {
  try {
    const seats = await SeatsModel.find();
    res.status(200).send(seats);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});



// reserve seats by providing required seats in body => /seat/reserve

seatsRouter.patch("/reserve", async (req, res) => {
  try {
    const seats = +req.body.seats;

    if (seats <= 0 || seats > 7) {
      res.status(400).send({ error: "Invalid number of seats" });
      return;
    }

    let rows = [];
    let booked = [];

    for (let i = 1; i <= 12; i++) {
      let availableSeats = await SeatsModel.find({ status: false, row: i });
      if (availableSeats.length) {
        rows.push(availableSeats);
      }
    }

//single row

    let singleRow = rows.find((row) => row.length >= seats);

    if (singleRow) {
      for (let i = 0; i < seats; i++) {
        singleRow[i].status = true;
        booked.push(`${singleRow[i].row}-${singleRow[i].seat}`);
        await singleRow[i].save();
      }
    } 

// multiple rows 

    else {
      let multipleRows = rows.filter((row) => row.length < seats);
      let reserve=0;

      for(let i=0;i<seats;i++){
        for(let j=0;j<multipleRows[i].length;j++){
          reserve++;
          multipleRows[i][j].status=true;
          booked.push(`${multipleRows[i][j].row}-${multipleRows[i][j].seat}`)
          await multipleRows[i][j].save();
  
          if(reserve===seats){
            break;
          }
        }

        if(reserve===seats){
          break;
        }
      }
    }

    res.send(booked);

  } catch (error) {

    res.status(500).send({ error: "Error reserving seats" });

  }
});

module.exports = seatsRouter;
