const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    postedby: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    image: {
      data: Buffer,
      contentType: String,
    },
    itemname: {
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

module.exports = Item = mongoose.model("Item", ItemSchema);
