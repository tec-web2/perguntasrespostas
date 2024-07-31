const salvarPerguntaService = require("../../services/perguntas/salvarPerguntaService");

async function salvarPerguntaController(req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  await salvarPerguntaService(titulo, descricao);
  res.redirect("/");
}
module.exports = salvarPerguntaController;
