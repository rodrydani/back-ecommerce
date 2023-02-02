const { UserServices } = require("../services");
const transporter = require("../utils/mailer");


const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.createUser(newUser);
    res.status(201).json(result);

    transporter.sendMail({
      from: "<rodrydanielmir@gmail.com>",
      to: result.email,
      subject: "Bienvenido",
      text: `Bienvenido ${result.username} `,
      html: welcomeTemplate(result.username),
    });
  } catch (error) {
    console.log(error);
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await UserServices.getUser(id);
    res.json(users);
  } catch (error) {
    console.log(error);
    next({
      
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  userRegister,
  getUser,
};