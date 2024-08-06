const salvarPerguntaService = require("../../services/perguntas/salvarPerguntaService");

async function salvarPerguntaController(req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  var id_autor = req.user_id;
  await salvarPerguntaService(titulo, descricao, id_autor);
  res.redirect("/");
}
module.exports = salvarPerguntaController;
