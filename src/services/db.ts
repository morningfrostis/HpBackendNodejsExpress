const Sequelize = require("sequelize");

const sequelize = new Sequelize("harrypotter", "harrypotter", "harrypotter", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
