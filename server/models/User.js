const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("user", UserSchema);
