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
    },
    location: {
      type: String,
    },
    age: {
      type: String,
    },
    about: {
      type: String,
    },
  },
  { timeStamps: true }
);

module.exports = new mongoose.model("Profile", ProfileSchema);
