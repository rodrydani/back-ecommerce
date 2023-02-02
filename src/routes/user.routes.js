const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userRegister, getUser } = require("../controllers");

router.post("/user", userRegister);
router.get("/user/:id", authenticate, getUser);

module.exports = router;