const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const ProductInOrder = db.define(
  "productInOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
   
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "order_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "product_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInOrder;