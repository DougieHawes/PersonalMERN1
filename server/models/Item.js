const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    submittedby: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    image: {
      type: String,
      required: true,
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
