const db= require("./utils/database");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routerApi = require("./routes");
const initModels=require("./models/init-models");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels(app);

routerApi(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my server" });
});
db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err));
  
db.sync({ alter: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err));

/*app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", orderRoutes);*/



module.exports = app;
