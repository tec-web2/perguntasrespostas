const Pergunta = require("./Pergunta");
const Resposta = require("./Resposta");
const Usuario = require("./Usuario");
const RespostaLike = require("./RespostaLike");

// Associação entre Pergunta e Resposta
Pergunta.hasMany(Resposta, { foreignKey: "perguntaId", as: "respostas" });
Resposta.belongsTo(Pergunta, { foreignKey: "perguntaId", as: "pergunta" });

// Associação entre Usuario e Pergunta
Usuario.hasMany(Pergunta, { foreignKey: "id_autor", as: "perguntas" });
Pergunta.belongsTo(Usuario, { foreignKey: "id_autor", as: "autor" });

// Associação entre Usuario e Resposta
Usuario.hasMany(Resposta, { foreignKey: "id_autor", as: "respostas" });
Resposta.belongsTo(Usuario, { foreignKey: "id_autor", as: "autor" });

// Associação entre Resposta e RespostaLike
Resposta.hasMany(RespostaLike, { foreignKey: "respostaId", as: "likes" });
RespostaLike.belongsTo(Resposta, { foreignKey: "respostaId", as: "resposta" });

// Associação entre Usuario e RespostaLike
Usuario.hasMany(RespostaLike, { foreignKey: "id_autor", as: "likesDados" });
RespostaLike.belongsTo(Usuario, { foreignKey: "id_autor", as: "autorLike" });

module.exports = { Pergunta, Resposta, Usuario, RespostaLike };
