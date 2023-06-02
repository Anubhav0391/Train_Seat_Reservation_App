const express = require("express");
const SeatsModel = require("../models/seats.model");

const seatsRouter = express.Router();

seatsRouter.get("/", async (req, res) => {
  try {
    const seats=await SeatsModel.find();
    res.status(200).send(seats);
  } catch (err) {
    res.status(400).send({"err":err.message});
  }
});

seatsRouter.post("/add", async (req, res) => {
  try {
    let count=0,flag=0
    for(let i=1;i<=Math.ceil(80/7);i++){
      flag++
      for(let j=1;j<=7;j++){
        count++;
        const ring = new SeatsModel({seat:count ,
          row:flag ,
          status: false});
        await ring.save();
      }
    }
    res.status(200).send({ "msg": "Product added successfully"});
  } catch (err) {
    res.status(400).send({ "msg": err.message });
  }
});
module.exports = seatsRouter;