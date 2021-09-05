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
        return res.status(400).json({ msg: err.message });
      }
      res.json(result);
    });
  });
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.getPostImage = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.image.data) {
      res.set("Content-Type", post.image.contentType);
      return res.send(post.image.data);
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().sort({ date: -1 });

    res.json(allPosts);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.editPost = (req, res) => {
  res.json({ msg: "edit-post" });
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post.postedby.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
