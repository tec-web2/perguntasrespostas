const salvarPerguntaService = require("../../services/perguntas/salvarPerguntaService");

async function salvarPerguntaController(req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  var perguntador = req.body.perguntador;
  await salvarPerguntaService(titulo, descricao, perguntador);
  res.redirect("/");
}
module.exports = salvarPerguntaController;
