const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductsController.js");

const productsController = new ProductsController();

/* GET users listing. */
router.get("/", productsController.printProducts);

router.post("/", productsController.addProduct);

module.exports = router;
