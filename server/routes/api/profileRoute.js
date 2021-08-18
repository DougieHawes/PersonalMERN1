const router = require("express").Router();

const {
  createProfile,
  getProfile,
  updateProfile,
} = require("../../controllers/profile");

router.post("/create", createProfile);
router.get("/get/:id", getProfile);
router.put("/update", updateProfile);

module.exports = router;
