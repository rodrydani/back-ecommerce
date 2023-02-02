const db = require("../utils/database");
const initModels = require("../models/init-models");

const {
    User,
    Order,
    Cart,
    Product,
    ProductInOrder,
    ProductInCart, 
}= require("../models");

initModels();

const users=[
    {
        username: "Rodrigo",
        email: "rodrigo@email.com",
        password: "1234",
    },
    {
        username: "Rosario",
        email: "rosario@email.com",
        password: "2345",
    },
    {
        username: "Luciano",
        email:"luciano@email.com",
        password: "3456",
    }
];
const products=[
    {
        name:"mochila",
        price:500,
        description:"description",
        availableQty:50,
        status: true,
        userId:1
    },
    {
        name:"celular",
        price: 20000,
        description:"description",
        availableQty:20,
        status: true,
        userId:2
    },
    {
        name:"cafetera",
        price: 2000,
        description:"description",
        availableQty:200,
        status: true,
        userId:3
    },
    {
        name:"pc",
        price: 20000,
        description:"description",
        availableQty:10,
        status: true,
        userId:1
    }
];
const carts = [
    { totalPrice: 30000, userId: 1, status:true},
    { totalPrice: 30000, userId: 2 , status:true},
    { totalPrice: 30000, userId: 3 , status:true},
  ];
const productInCart=[
    {
        quantity: 2,
        price: 16000,
        status: true,
        cartId: 1,
        productId: 1,
        status:true,
    },
    {
        quantity: 1,
        price: 16000,
        status: true,
        cartId: 2,
        productId: 2,
        status:true,
    },
    {
        quantity: 1,
        price: 16000,
        status: true,
        cartId: 3,
        productId: 3,
        status:true,
    },
    {
        quantity: 1,
        price: 16000,
        status: true,
        cartId: 1,
        productId: 4,
        status:true,
    },
  
]

  const orders = [
    {
      totalPrice: 1000,
      status: true,
      userId: 1,
    },
    {
      totalPrice: 20000,
      status: true,
      userId: 2,
    },
    {
      totalPrice: 2000,
      status: true,
      userId: 3,
    },
    {
      totalPrice: 20000,
      status: true,
      userId: 3,
    },
];

const productInOrder =[
    {
        quantity: 3,
        price: 1500,
        status: true,
        orderId: 1,
        productId: 1,
      },
      {
        quantity: 1,
        price: 20000,
        status: true,
        orderId: 2,
        productId: 2,
      },
      {
        quantity: 2,
        price: 4000,
        status: true,
        orderId: 3,
        productId: 3,
      },
      {
        quantity: 1,
        price: 20000,
        status: true,
        orderId: 4,
        productId: 4,
      },
];

db.sync({ force: true }).then(() => {
    console.log("Sincronizado");
    users.forEach((user) => User.create(user));
    setTimeout(() => {
        products.forEach((product) => Product.create(product));
      }, 100);
      setTimeout(() => {
        carts.forEach((cart) => Cart.create(cart));
      }, 200);
      setTimeout(() => {
        productInCart.forEach((c) => ProductInCart.create(c));
      }, 300);
      setTimeout(() => {
        orders.forEach((order) => Order.create(order));
      }, 400);
      setTimeout(() => {
        productInOrder.forEach((o) => ProductInOrder.create(o));
      }, 500);
});