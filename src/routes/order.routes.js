const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { createOrder, getOrder } = require("../controllers");


router.post("/user/:id/order", createOrder)

router.get("/user/:id/order", authenticate, getOrder);

module.exports = router;