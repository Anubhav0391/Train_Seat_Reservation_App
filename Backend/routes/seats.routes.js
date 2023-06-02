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

module.exports = seatsRouter;