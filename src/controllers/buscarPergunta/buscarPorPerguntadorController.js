const buscarPorPerguntadorService = require("../../services/perguntas/buscarPorPerguntadorService");

async function buscarPorPerguntadorController(req, res) {
    var perguntador = req.body.perguntador;
    const perguntas = await buscarPorPerguntadorService(perguntador);
    res.render("resultadoBusca", {
        pergunta: perguntas,
    });
}
module.exports = buscarPorPerguntadorController;