class ProductsService {
  constructor(models) {
    this.models = models;
  }

  async addProduct(body) {
    const data = await new this.models.products(body);
    const product = await data.save();
    return product;
  }
}

module.exports = ProductsService;
