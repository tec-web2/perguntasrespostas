// models/associations.js
const Pergunta = require("./Pergunta");
const Resposta = require("./Resposta");

Pergunta.hasMany(Resposta, { foreignKey: "perguntaId", as: "resposta" });
Resposta.belongsTo(Pergunta, { foreignKey: "perguntaId", as: "pergunta" });

module.exports = { Pergunta, Resposta };
