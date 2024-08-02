const deletarPerguntarService = require("../../services/perguntas/deletarPerguntarService");

async function deletarPerguntaController(req, res) {
  const perguntaId = req.params.id;
  const pergunta = await deletarPerguntarService(perguntaId);
  res.end();
}
module.exports = deletarPerguntaController;
