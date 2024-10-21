class UsersService {
  constructor(models) {
    this.models = models;
  }
  async addUser(body) {
    const data = await new this.models.users(body);
    const user = await data.save();

    return user;
  }
}

module.exports = UsersService;
