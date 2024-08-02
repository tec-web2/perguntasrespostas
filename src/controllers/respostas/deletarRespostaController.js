const deletarRespostaService = require("../../services/respostas/deletarRespostaService");

async function deletarRespostaController(req, res) {
  const respostaId = req.params.id;
  const resposta = await deletarRespostaService(respostaId);
  res.end();
}
module.exports = deletarRespostaController;
