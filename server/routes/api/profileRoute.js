const router = require("express").Router();

const {
  createProfile,
  getProfile,
  updateProfile,
} = require("../../controllers/profile");
const isAuth = require("../../middleware/isAuth");

router.post("/create", isAuth, createProfile);
router.post("/create", isAuth, updateProfile);
router.get("/", getProfile);

module.exports = router;
