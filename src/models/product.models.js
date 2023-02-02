const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const User= require("./user.models");
const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "available_qty",
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
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
  },
  {
    timestamps: false,
  }
);

module.exports = Product;