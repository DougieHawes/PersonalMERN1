const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
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

module.exports = new mongoose.model("Item", ItemSchema);
