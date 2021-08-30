const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    avatar: { data: Buffer, contentType: String },
    quote: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = new mongoose.model("Profile", ProfileSchema);
