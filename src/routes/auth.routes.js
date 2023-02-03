const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userLogin, deleteLogout } = require("../controllers");

/*router.post("/auth/register", register);*/

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: user login
 *     tags: [Auth]
 *     requestBody:
 *       description: start sesion to next operate
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       201:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user login
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_auth"
 * /api/v1/auth/logout:
 *   post:
 *     summary: user logout
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user logout
 */
router.post("/auth/login", userLogin);
router.delete("/auth/logout",  deleteLogout);

module.exports = router;
