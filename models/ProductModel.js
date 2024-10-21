const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
  category: {
    type: String,
    required: true,
  },
  attributes: {
    type: [
      {
        key: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          require: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("products", ProductSchema);
