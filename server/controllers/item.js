const formidable = require("formidable");
const fs = require("fs");

const Item = require("../models/Item");
const User = require("../models/User");

exports.newItem = async (req, res) => {
  const postedby = await User.findById(req.user.id).select("-password");

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "image upload failed",
      });
    }
    const { image, itemname, subtitle, text } = fields;

    const newItem = new Item({ postedby, ...fields });

    if (files.image) {
      if (files.image.size > 1000000) {
        return res.status(400).json({
          error: "image should be less than 1mb in size",
        });
      }
      newItem.image.data = fs.readFileSync(files.image.path);
      newItem.image.contentType = files.image.type;
    }

    newItem.save((err, result) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }
      res.json(result);
    });
  });
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    res.json(item);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const allItems = await Item.find().sort({ date: -1 });

    res.json(allItems);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.editItem = (req, res) => {
  res.json({ msg: "edit-item" });
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    if (item.postedby.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await item.remove();

    res.json({ msg: "Item removed" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
