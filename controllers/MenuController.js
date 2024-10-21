const models = require("../models");

class MenuController {
  async addProduct(req, res, next) {
    try {
      const body = req.body;
      const product = await req.app.locals.services.menu.addProduct(body);
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error adding product", error: error.message });
    }
  }
  async printMenu(req, res) {
    try {
      const menu = await models.menu.find({});
      res.render("menu", { menu });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = MenuController;
