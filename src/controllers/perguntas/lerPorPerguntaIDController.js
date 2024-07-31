const lerPerguntaPorIDService = require("../../services/perguntas/lerPerguntaPorIDService");

async function lerPorPerguntaIDController(req, res) {
  const perguntaId = req.params.id;
  const pergunta = await lerPerguntaPorIDService(perguntaId);
  if (!pergunta) {
    return res.status(404).send("Pergunta não encontrada.");
  }
  res.render("perguntadavez", { pergunta });
}
module.exports = lerPorPerguntaIDController;
