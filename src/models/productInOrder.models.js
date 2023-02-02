const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_order:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: rodrigo
 *         totalPrice:
 *           type: number
 *           example: 24000
 *         quantity:
 *           type: number
 *           example: 2
 *         price:
 *           type: number
 *           example: 20000
 *         status:
 *           type: boolean
 *           example: true
 *         orderId:
 *           type: number
 *           example: 1
 *         productId:
 *           type: string
 *           example: 1
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

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