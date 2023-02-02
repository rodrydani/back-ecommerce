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

const router = Router();

router.post("/user/:id/product", authenticate, createProducts)

router.get("/user/:id/product", authenticate, getProducts);

router.get("/products", getProductsAll);

router.get("/product/:id", authenticate, getIdProducts);

router.patch("/product/:id", authenticate, updateProducts);

router.delete("/product/:id", authenticate, deleteProducts);


module.exports = router;