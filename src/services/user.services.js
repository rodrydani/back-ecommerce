const{ User, Cart }= require("../models");

class UserServices {
  static async createUser(user) {
    try {
      
      const result = await User.create(user);
      
      const createCart = await Cart.create({
        totalPrice: 0,
        userId: result.id
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id) {
    try {
      const result = await User.findOne({
        where: { id },
        attributes: ["id", "username", "email"]
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = UserServices;