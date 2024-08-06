const deletarRespostaService = require("../../services/respostas/deletarRespostaService");
const lerRespostaPorID = require("../../services/respostas/lerRespostaPorIDService");


async function deletarRespostaController(req, res) {
  const respostaId = req.params.id;
  const resposta = await lerRespostaPorID(respostaId)
  if (resposta.autor.dataValues.id !=req.user_id){
    return res.status(400).send("Usuário errado")
  }
  else{
    await deletarRespostaService(respostaId);
    res.end();
  }
}
module.exports = deletarRespostaController;
