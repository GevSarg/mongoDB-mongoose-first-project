const express = require("express");
const router = express.Router();
const MenuController = require("../controllers/MenuController.js");

const menuController = new MenuController();

router.get("/", menuController.printMenu);
router.post("/", menuController.addProduct);

module.exports = router;
