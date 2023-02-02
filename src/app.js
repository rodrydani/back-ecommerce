const db= require("./utils/database");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routerApi = require("./routes");
const initModels=require("./models/init-models");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels(app);

routerApi(app);

app.get('/', (req, res) => {
  res.status(200).json({
    status: "welcome to my server",
    description: "link de la API", link: process.env.HOST,
  })
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
