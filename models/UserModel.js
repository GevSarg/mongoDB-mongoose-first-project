const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  lang: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("users", UserSchema);
