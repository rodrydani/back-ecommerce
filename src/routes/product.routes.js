const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const { 
  getProductsAll, 
  getProducts, 
  createProducts, 
  updateProducts, 
  deleteProducts,
  getIdProducts, 
} = require("../controllers");


/**
 * @openapi
 * /api/v1/user/{id}/product:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     requestBody:
 *       description: Create a new product for the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/create_product"
 *     responses:
 *       201:
 *         description: created product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 * /api/v1/products:
 *   get:
 *     summary: See all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 * /api/v1/product/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: See a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: product Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: product Id
 *     requestBody:
 *       description: Update a product of the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/update_product"
 *     responses:
 *       201:
 *         description: created product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of a cart in the app
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: product Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product_delete"
 */

const router = Router();

router.post("/user/:id/product", authenticate, createProducts)

router.get("/user/:id/product", authenticate, getProducts);

router.get("/products", getProductsAll);

router.get("/product/:id", authenticate, getIdProducts);

router.patch("/product/:id", authenticate, updateProducts);

router.delete("/product/:id", authenticate, deleteProducts);


module.exports = router;