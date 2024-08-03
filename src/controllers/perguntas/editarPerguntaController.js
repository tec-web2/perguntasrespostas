const editarPerguntaService = require("../../services/perguntas/editarPerguntaService");

async function editarPerguntaController(req, res) {
    const respostaID = req.params.id;
    const { titulo, descricao } = req.body;
    const novaResposta = editarPerguntaService(respostaID, titulo, descricao)

    res.end();
}
module.exports = editarPerguntaController;