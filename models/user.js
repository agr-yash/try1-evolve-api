const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  paymentDone: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  currentBatch: {
    type: String,
  },
  requestedBatch: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
