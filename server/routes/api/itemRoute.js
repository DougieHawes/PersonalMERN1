const router = require("express").Router();

const isAuth = require("../../middleware/isAuth");

const {
  newItem,
  getItem,
  getItemImage,
  getItems,
  editItem,
  deleteItem,
} = require("../../controllers/item");

router.post("/new", isAuth, newItem);
router.get("/:id", getItem);
router.get("/image/:id", getItemImage);
router.get("/", getItems);
router.put("/edit/:id", isAuth, editItem);
router.delete("/delete/:id", isAuth, deleteItem);

module.exports = router;
