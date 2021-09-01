const router = require("express").Router();

const {
  createProfile,
  getProfile,
  updateProfile,
  getProfileImage,
} = require("../../controllers/profile");
const isAuth = require("../../middleware/isAuth");

router.post("/create", isAuth, createProfile);
router.put("/update", isAuth, updateProfile);
router.get("/", getProfile);
router.get("/image/:id", getProfileImage);

module.exports = router;
