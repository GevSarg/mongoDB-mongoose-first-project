const models = require("../models");

class HouseController {
  async addHouse(req, res, next) {
    try {
      const body = req.body;
      const houses = await req.app.locals.services.house.addHouse(body);
      res.json(houses);
    } catch (error) {
      res.json("Error Houses");
    }
  }
  async printHouses(req, res) {
    try {
      const house = await models.houses.find({});
      res.render("index", { house });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = HouseController;
