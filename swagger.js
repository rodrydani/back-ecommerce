const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options= {
    apis:["./src/routes/auth.routes.js","./src/routes/user.routes.js",
    "./src/models/user.models.js",
"./src/routes/product.routes.js","./src/models/product.models.js",
"./src/models/productInOrder.models.js", "./src//models/productInCart.models.js",
"./src/routes/order.routes.js","./src/models/order.models.js",
"./src/routes/cart.routes.js","./src/models/cart.models.js"
],
    definition: {
        openapi: "3.0.0",
        info:{
            title: "eccomerce Project",
            version: "1.0.0",
            description:"eccomerce Api- Final Project"
        }
    }
};

//vamos generar una especificacion en json para nuestra docu

const swaggerSpec = swaggerJSDoc(options);
const swaggerDocs = (app, port) => {

    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (req, res)=>{
        res.setHeader({"content-type": "application-json"});
        res.send(swaggerSpec)
    });
    console.log(`la documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`);
  };
  
  module.exports = swaggerDocs; 