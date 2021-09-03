const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    postedby: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    date: {
      type: Date,
      default: Date.now(),
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = Post = mongoose.model("Post", PostSchema);
