const listarPerguntaService = require("../../services/perguntas/listarPerguntaService");

async function listarPerguntaController(req, res) {
  const perguntas = await listarPerguntaService();
  console.log(perguntas)
  res.render("index", {
    pergunta: perguntas,
  });
}
module.exports = listarPerguntaController;
