
const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const ProductInCart = db.define(
  "productInCart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "cart_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id",
    },
  }, {
    timestamps: false,
  }
);

module.exports = ProductInCart;