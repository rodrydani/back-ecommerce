const {User, Product}= require("../models");

class ProductServices {

    static async getProdAll() {
      try {
          const result = await Product.findAll({
            attributes: {
              exclude: ["userId", "user_id"]
            },
            include: [
              {
                model: User,
                as: "users",
                attributes: ["id", "username"]
              }
              
            ]
          });
          return result;
      } catch (error) {
        console.log(error);
          throw(error); 
      }
    }
    static async getProd(id) {
      try {
        const result = await User.findOne({
          where: { id },
          attributes: ["username"],
          include: [
            {
              model: Product,
              as: "products",
              attributes: {
                exclude: ["userId", "user_id"]
              }
            },
          ]
        });
        return result;
      } catch (error) {
        console.log(error);
          throw(error); 
      }
    }
    static async getIdProd(id) {
      try {
        const result = await Product.findOne({
          where: { id },
          attributes: {
            exclude: ["userId", "user_id"]
          }
        });
        const user = await User.findOne({where: result.dataValues.userId})
        return {id: user.dataValues.id, username: user.dataValues.username, product: result};
      } catch (error) {
        console.log(error);
          throw(error); 
      }
    };
    static async createProd(id, body) {
      try {
        const result = await Product.create({...body, userId: id});
        return result;
      } catch (error) {
        throw error;
      }
    };
    static async updateProd(id, body) {
      try {
        const products = await Product.findOne({where: { id }});
        const result = await products.update({...body});
        return result;
      } catch (error) {
        throw error;
      }
    };
    static async deleteProd(id) {
      try {
        const products = await Product.findOne({where: { id }});
        const result = await products.destroy();
        return result;
      } catch (error) {
        throw error;
      }
    };
  };
  
  module.exports = ProductServices;