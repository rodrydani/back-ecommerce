const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const User= require("./user.models");
const Cart = db.define(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      field: "total_price",
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
      references:{
        model:User,
        key:"id"
      }
    },
  },{
    timestamps: false,
  }
);

module.exports = Cart;
