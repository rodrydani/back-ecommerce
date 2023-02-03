const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const User= require("./user.models");


/**
 * @openapi
 * components:
 *   schemas:
 *     request_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: mochila
 *         price:
 *           type: number
 *           example: 500
 *         description:
 *           type: text
 *           example: description
 *         availableQty:
 *           type: number
 *           example: 50
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: number
 *           example: 1
 *     create_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: mochila
 *         price:
 *           type: number
 *           example: 500
 *         description:
 *           type: text
 *           example: description
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *     update_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: mochila
 *         price:
 *           type: number
 *           example: 500
 *         description:
 *           type: text
 *           example: description
 *         availableQty:
 *           type: number
 *           example: 50
 *     request_product_delete:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Producto eliminado 
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */


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