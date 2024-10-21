const express = require("express");
const router = express.Router();
const CarsControler = require("../controllers/CarsController.js");

const carsController = new CarsControler();

/* GET users listing. */
router.get("/", carsController.printCars);

router.post("/", carsController.addCar);

module.exports = router;
