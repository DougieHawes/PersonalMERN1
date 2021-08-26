const router = require("express").Router();

const isAuth = require("../../middleware/isAuth");

const {
  newItem,
  getItem,
  getItems,
  editItem,
  deleteItem,
} = require("../../controllers/item");

router.post("/new", isAuth, newItem);
router.get("/get/:id", getItem);
router.get("/all", getItems);
router.put("/edit/:id", editItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;
