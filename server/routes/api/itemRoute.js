const router = require("express").Router();

const {
  newItem,
  getItem,
  getItems,
  editItem,
  deleteItem,
} = require("../../controllers/item");

router.post("/new", newItem);
router.get("/get/:id", getItem);
router.get("/all", getItems);
router.put("/edit/:id", editItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;
