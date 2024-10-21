const models = require("../models");

class UsersController {
  async addUser(req, res) {
    try {
      const body = req.body;
      const users = await req.app.locals.services.users.addUser(body);

      res.json(users);
    } catch (error) {
      res.json("ERROR adding User");
    }
  }
  async printUsers(req, res) {
    try {
      const users = await models.users.find({});
      res.render("users", { users });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = UsersController;
