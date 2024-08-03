const Sequelize = require("sequelize");

// Cria uma nova instância do Sequelize
const conection = new Sequelize("guiaperguntas", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
module.exports = conection;
