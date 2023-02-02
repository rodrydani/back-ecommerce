const authRouter = require("./auth.routes");
const usersRoutes = require("./user.routes"); 
const productsRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./order.routes");

const routerApi = (app) => {
  app.use("/api/v1/", authRouter);
  app.use("/api/v1/", usersRoutes);
  app.use("/api/v1/",  productsRoutes);
  app.use("/api/v1/", cartRoutes);
  app.use("/api/v1/", orderRoutes);
};
module.exports = routerApi;
