const router = require("express").Router();

const {
  userSignup,
  userSignin,
  getUsers,
  getUser,
} = require("../../controllers/user");

router.post("/signup", userSignup);
router.post("/signin", userSignin);
router.get("/users", getUsers);
router.get("/:id", getUser);

module.exports = router;
