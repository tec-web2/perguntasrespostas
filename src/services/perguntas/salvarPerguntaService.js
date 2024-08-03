const { Pergunta, Resposta } = require("../../../database/associations");

async function salvarPerguntaService(titulo, descricao, perguntador) {
  return Pergunta.create({
    titulo: titulo,
    descricao: descricao,
    perguntador: perguntador,
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
