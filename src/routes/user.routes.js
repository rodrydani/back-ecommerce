const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userRegister, getUser } = require("../controllers");

/**
 * @openapi
 * /api/v1/user:
 *   post:
 *     summary: Register a new user 
 *     tags: [User]
 *     requestBody:
 *       description: To register a new user you need a username, email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: created
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
 *                     $ref: "#/components/schemas/users"
 * /api/v1/user/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of a user 
 *     tags: [User]
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
 *         description: Data displayed 
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
 *                     $ref: "#/components/schemas/users"
 */
router.post("/user", userRegister);
router.get("/user/:id", authenticate, getUser);

module.exports = router;