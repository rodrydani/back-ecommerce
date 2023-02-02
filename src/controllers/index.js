const { userLogin, deleteLogout } = require("./auth.controller");
const {userRegister, getUser} = require("./user.controller");
const { 
  getProductsAll, 
  getProducts, 
  createProducts, 
  updateProducts, 
  deleteProducts,
  getIdProducts 
} = require("./product.controller");
const { addProducts, seeCart, updateCart, deleteCart } = require("./cart.controller");
const { createOrder, getOrder } = require("./order.controller");


module.exports = {
  userLogin,
  userRegister,
  getUser,
  getProductsAll,
  getProducts,
  createProducts,
  addProducts,
  seeCart,
  createOrder,
  getOrder,
  deleteLogout,
  updateProducts,
  deleteProducts,
  updateCart,
  deleteCart,
  getIdProducts,
}