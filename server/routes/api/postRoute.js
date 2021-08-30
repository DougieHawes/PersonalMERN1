const router = require("express").Router();

const isAuth = require("../../middleware/isAuth");

const {
  newPost,
  getPost,
  getPosts,
  editPost,
  deletePost,
} = require("../../controllers/post");

router.post("/new", isAuth, newPost);
router.get("/:id", getPost);
router.get("/", getPosts);
router.put("/edit/:id", editPost);
router.delete("/delete/:id", isAuth, deletePost);

module.exports = router;
