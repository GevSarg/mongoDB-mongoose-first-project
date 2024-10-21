const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["food", "drink"],
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

module.exports = mongoose.model("menu", MenuSchema, "menu");
