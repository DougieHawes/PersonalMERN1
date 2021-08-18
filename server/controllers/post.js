const Post = require("../models/Post");

exports.newPost = (req, res) => {
  res.json({ msg: "new-post" });
};

exports.getPost = (req, res) => {
  res.json({ msg: "get-post" });
};

exports.getPosts = (req, res) => {
  res.json({ msg: "get-posts" });
};

exports.editPost = (req, res) => {
  res.json({ msg: "edit-post" });
};

exports.deletePost = (req, res) => {
  res.json({ msg: "delete-post" });
};
