const router = require("express").Router();

const { userSignup, userSignin, getUser } = require("../../controllers/user");
const isAuth = require("../../middleware/isAuth");

router.post("/signup", userSignup);
router.post("/signin", userSignin);
router.get("/", isAuth, getUser);

module.exports = router;
