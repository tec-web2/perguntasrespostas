const { Pergunta, Resposta } = require("../../../database/associations");

async function salvarPerguntaService(titulo, descricao, id_autor) {
  return Pergunta.create({
    titulo: titulo,
    descricao: descricao,
    id_autor,
  })
    .then(() => {
      return;
    })
    .catch((error) => {
      console.error("Erro ao criar perguntas:", error);
      throw error;
    });
}

module.exports = salvarPerguntaService;
