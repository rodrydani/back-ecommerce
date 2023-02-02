const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { addProducts, seeCart, updateCart, deleteCart } = require("../controllers");



router.post("/user/:id/cart", authenticate, addProducts);

router.get("/user/:id/cart", authenticate, seeCart);

router.patch("/cart/:cartId/product/:productId", updateCart);

router.delete("/cart/:cartId/product/:productId", deleteCart);

module.exports = router;