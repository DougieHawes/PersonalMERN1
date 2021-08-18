const router = require("express").Router();

const {
  newPost,
  getPost,
  getPosts,
  editPost,
  deletePost,
} = require("../../controllers/post");

router.post("/new", newPost);
router.get("/get/:id", getPost);
router.get("/all", getPosts);
router.put("/edit/:id", editPost);
router.delete("/delete/:id", deletePost);

module.exports = router;
