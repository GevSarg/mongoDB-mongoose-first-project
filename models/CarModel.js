const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  engine: {
    type: [
      {
        key: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("cars", CarSchema);
