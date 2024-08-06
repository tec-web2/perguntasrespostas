const deletarPerguntarService = require("../../services/perguntas/deletarPerguntarService");
const lerPerguntaPorIDService = require("../../services/perguntas/lerPerguntaPorIDService");

async function deletarPerguntaController(req, res) {
  const perguntaId = req.params.id;
  const perguntaParaApagar = await lerPerguntaPorIDService(perguntaId)
  if (perguntaParaApagar.autor.dataValues.id!=req.user_id){
    return res.status(400).send("Usuário errado")
  }
  const pergunta = await deletarPerguntarService(perguntaId);
  res.status(200).end();
}
module.exports = deletarPerguntaController;
