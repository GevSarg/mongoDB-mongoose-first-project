const models = require("../models");

class ProductsController {
  async addProduct(req, res) {
    try {
      const product = await req.app.locals.services.products.addProduct(
        req.body
      );
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
    }
  }

  async printProducts(req, res) {
    try {
      const products = await models.products.find({});
      res.render("products", { products });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ProductsController;
