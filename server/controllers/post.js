const formidable = require("formidable");
const fs = require("fs");

const Post = require("../models/Post");
const User = require("../models/User");

exports.newPost = async (req, res) => {
  const postedby = await User.findById(req.user.id).select("-password");

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "image upload failed",
      });
    }
    const { image, title, subtitle, text } = fields;

    const newPost = new Post({ postedby, ...fields });

    if (files.image) {
      if (files.image.size > 1000000) {
        return res.status(400).json({
          error: "image should be less than 1mb in size",
        });
      }
      newPost.image.data = fs.readFileSync(files.image.path);
      newPost.image.contentType = files.image.type;
    }

    newPost.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

exports.getPost = (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.getPosts = (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.editPost = (req, res) => {
  res.json({ msg: "edit-post" });
};

exports.deletePost = (req, res) => {
  res.json({ msg: "delete-post" });
};
