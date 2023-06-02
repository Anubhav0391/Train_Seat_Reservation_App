const mongoose = require("mongoose");

const seatSchema = mongoose.Schema({
  seat: {type: Number,required:true},
  row: {type: Number,required:true},
  status: {type: Boolean,required:true}
});

const SeatsModel = mongoose.model("seat", seatSchema);
module.exports = SeatsModel;