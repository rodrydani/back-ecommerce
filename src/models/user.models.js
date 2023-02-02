const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const User = db.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          const { password } = user;
          const hash = bcrypt.hashSync(password, 8);
          user.password = hash;
        },
      },
    }
  );
  
  module.exports = User;