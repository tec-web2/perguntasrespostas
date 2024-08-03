const buscarPorTituloService = require("../../services/perguntas/buscarPorTituloService");

async function buscarPorTituloController(req, res) {
  var titulo = req.body.titulo;
  const perguntas = await buscarPorTituloService(titulo);
  res.render("resultadoBusca", {
    pergunta: perguntas,
  });
}
module.exports = buscarPorTituloController;
