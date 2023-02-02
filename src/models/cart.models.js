const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const User= require("./user.models");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_cart:
 *       type: object
 *       properties:
 *         totalPrice:
 *           type: number
 *           example: 1000
 *         status: 
 *           type: boolean
 *           example: true
 *         userId:
 *           type: number
 *           example: 1
 *     request_cart_products:
 *       type: object
 *       properties:
 *         message: 
 *           type: string
 *           example: Producto eliminado del carrito 
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */
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
