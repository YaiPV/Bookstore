const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  identification: {
    type: Number,
    required: true,
  },
  cellphone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }

})

module.exports = mongoose.model("Buyer", buyerSchema);