class HouseService {
  constructor(models) {
    this.models = models;
  }
  async addHouse(body) {
    const data = await new this.models.houses(body);
    const houses = await data.save();
    return houses;
  }
}

module.exports = HouseService;
