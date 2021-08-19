const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    quote: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = new mongoose.model("Profile", ProfileSchema);