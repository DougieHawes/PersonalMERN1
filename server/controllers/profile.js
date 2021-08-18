const Profile = require("../models/Profile");

exports.createProfile = (req, res) => {
  res.json({ msg: "create-profile" });
};

exports.getProfile = (req, res) => {
  res.json({ msg: "get-profile" });
};

exports.updateProfile = (req, res) => {
  res.json({ msg: "update-profile" });
};
