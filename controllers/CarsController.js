const models = require("../models");

class CarsController {
  async addCar(req, res, next) {
    try {
      const body = req.body;
      const cars = await req.app.locals.services.cars.addCar(body);
      res.json(cars);
    } catch (error) {
      res.json("Error Cars");
    }
  }
  async printCars(req, res) {
    try {
      const cars = await models.cars.find({});
      res.render("cars", { cars });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = CarsController;
