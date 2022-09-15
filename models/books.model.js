const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  launchYear: {
    type: Date,
    required: true,
  },
  isbn: {
    type: Number,
    require: true
  },
  price: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model("Book", bookSchema);