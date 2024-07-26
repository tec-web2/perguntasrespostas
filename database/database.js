const Sequelize = require("sequelize");

// Cria uma nova instância do Sequelize
const conection = new Sequelize("guiaperguntas", "root", "12345678", {
  host: "localhost",
  dialect: "mysql", // Mude para o dialeto correto se estiver usando outro DB
});
module.exports = conection;
