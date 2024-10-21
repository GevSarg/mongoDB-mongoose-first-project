class CarsService {
  constructor(models) {
    this.models = models;
  }
  async addCar(body) {
    const data = await new this.models.cars(body);
    const cars = await data.save();
    return cars;
  }
}

module.exports = CarsService;
