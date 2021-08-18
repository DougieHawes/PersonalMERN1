const Item = require("../models/Item");

exports.newItem = (req, res) => {
  res.json({ msg: "new-item" });
};

exports.getItem = (req, res) => {
  res.json({ msg: "get-item" });
};

exports.getItems = (req, res) => {
  res.json({ msg: "get-items" });
};

exports.editItem = (req, res) => {
  res.json({ msg: "edit-item" });
};

exports.deleteItem = (req, res) => {
  res.json({ msg: "delete-item" });
};
