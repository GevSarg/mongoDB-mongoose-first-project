class MenuService {
  constructor(models) {
    this.models = models;
  }

  async addProduct(body) {
    const data = await new this.models.menu(body);
    const menu = await data.save();
    return menu;
  }
}

module.exports = MenuService;
