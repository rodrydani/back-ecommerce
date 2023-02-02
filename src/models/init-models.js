const { User, Cart, Order, Product, ProductInOrder, ProductInCart } = require("./index");

const initModels =()=> {


  User.hasMany(Product, { as: "products", foreignKey: "user_id" });
  Product.belongsTo(User, { as: "users", foreignKey: "user_id" });

  
  // U:U
  User.hasOne(Cart, { as: "propietario", foreignKey: "user_id" });
  Cart.belongsTo(User, { as: "carritos", foreignKey: "user_id" });
 
  //U:M 
  User.hasMany(Order, { as: "purchased", foreignKey: "user_id" });
  Order.belongsTo(User, { as: "compra", foreignKey: "user_id" });


  // M:M

  ProductInOrder.belongsTo(Order, { foreignKey: "order_id" });
  Order.hasMany(ProductInOrder, { as: "orders", foreignKey: "order_id" });

  ProductInOrder.belongsTo(Product, { as: "produ", foreignKey: "product_id" });
  Product.hasMany(ProductInOrder, { as: "prod", foreignKey: "product_id" });

  // M:M

  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" });
  Cart.hasMany(ProductInCart, { as: "products", foreignKey: "cart_id" });

  ProductInCart.belongsTo(Product, { as:"products", foreignKey: "product_id" });
  Product.hasMany(ProductInCart, {  as: "productInCart", foreignKey: "product_id" });

};

module.exports = initModels;




