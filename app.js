const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const carsRouter = require("./routes/cars");
const menuRouter = require("./routes/Menu");

const models = require("./models");

const app = express();

const ProductServices = require("./services/ProductsService.js");
const UserServices = require("./services/UsersService.js");
const CarServices = require("./services/CarsService.js");
const MenuServices = require("./services/MenuService.js");
const HouseServices = require("./services/HouseService.js");

mongoose
  .connect(`mongodb://localhost:27017/products`)
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    "Failed to connect";
  });

// view engine setup
app.locals.models = {
  products: models.products,
  users: models.users,
  cars: models.cars,
  menu: models.menu,
  houses: models.houses,
};

app.locals.services = {
  products: new ProductServices(app.locals.models),
  users: new UserServices(app.locals.models),
  cars: new CarServices(app.locals.models),
  menu: new MenuServices(app.locals.models),
  house: new HouseServices(app.locals.models),
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cars", carsRouter);
app.use("/menu", menuRouter);
app.use("/products", productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
