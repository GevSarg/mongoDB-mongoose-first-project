const express = require("express");
const router = express.Router();
const HouseControllers = require("../controllers/HouseController.js");

const houseController = new HouseControllers();

/* GET home page. */
router.get("/", houseController.printHouses);

router.post("/", houseController.addHouse);

module.exports = router;
