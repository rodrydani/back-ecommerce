const {
    User,
    Order,
    ProductInOrder,
    Cart,
    ProductInCart,
    Product,
  } = require("../models");
  const transporter = require("../utils/mailer");

  
  class OrdersServices {
    static async postOrder(id) {
      try {
        const allProducts = await ProductInCart.findAll();
        const cart = await Cart.findOne({ where: { id } });
        const order = await Order.create({
          totalPrice: cart.totalPrice,
          status: cart.status,
          userId: id,
        });
        const quantityArr = [];
        allProducts.forEach((prod) => {
          quantityArr.push(prod.quantity);
        });
        const quantity = quantityArr.reduce((a, b) => a + b);
  
        allProducts.forEach(async (prod) => {
          const product = await Product.findOne({ where: prod.productId });
          const orderProducts = await ProductInOrder.create({
            nameProduct: product.dataValues.name,
            quantity: prod.quantity,
            price: prod.price,
            status: prod.status,
            orderId: order.id,
            productId: prod.productId,
          });
  
          product.update({ availableQty: product.availableQty - prod.quantity });
        });
  
        cart.update({
          status: true,
          totalPrice: 0,
        });
  
        const user = await User.findOne({ where: { id } });
  
        transporter.sendMail({
          from: "<yulianaboglione@gmail.com>",
          to: user.email,
          subject: `Gracias por preferir a My shop`,
          text: `Haz realizado la compra de ${quantity} productos por un total de ${order.totalPrice}`,
        });
  
        allProducts.forEach(async (prod) => {
          await prod.destroy();
        });
        return order;
      } catch (error) {
        throw error;
      }
    }
    static async getOrder(id) {
      try {
        const result = await User.findOne({
          where: { id },
          attributes: ["username"],
          include: {
            model: Order,
            as: "purchased",
            attributes: {
              exclude: ["userId", "user_id"],
            },
            include: {
              model: ProductInOrder,
              as: "orders",
              attributes: {
                exclude: ["orderId", "order_id", "productId", "product_id"],
              },
            },
          },
        });
        // const purchase = await Orders.findAll();
        const quantityProd = await ProductInOrder.findAll();
        const arrPrice = [];
        const arrQuantity = [];
  
        quantityProd?.forEach((purch) => {
          arrPrice.push(purch.dataValues.price);
          arrQuantity.push(purch.dataValues.quantity);
        });
  
        const aditionArrQuantity = arrQuantity.reduce((a, b) => a + b);
        const priceTotal = arrPrice.reduce((a, b) => a + b);
  
        result.dataValues.totalPrice = priceTotal;
        result.dataValues.totalProducts = aditionArrQuantity;
  
        return result;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = OrdersServices;