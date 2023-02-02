const User= require("./user.models");
const Product= require("./product.models");
const Order= require("./order.models");
const Cart= require("./cart.models");
const ProductInOrder= require("./productInOrder.models");
const ProductInCart= require ("./productInCart.models");

module.exports= {
User,
Product,
Order,
Cart,
ProductInOrder,
ProductInCart
};