const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userLogin, deleteLogout } = require("../controllers");

//router.post("/auth/register", register);

router.post("/auth/login", userLogin);

router.delete("/auth/logout", authenticate, deleteLogout);

module.exports = router;
