const express = require("express");
const router = express.Router();
const UsersControler = require("../controllers/UsersController.js");

const usersController = new UsersControler();

/* GET users listing. */
router.get("/", usersController.printUsers);

router.post("/", usersController.addUser);

module.exports = router;
