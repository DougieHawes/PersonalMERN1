const router = require("express").Router();

const {
  userSignup,
  userSignin,
  getUsers,
  getUser,
} = require("../../controllers/user");
const isAuth = require("../../middleware/isAuth");

router.post("/signup", userSignup);
router.post("/signin", userSignin);
router.get("/users", getUsers);
router.get("/", isAuth, getUser);

module.exports = router;
