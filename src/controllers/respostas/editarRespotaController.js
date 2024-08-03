const editarRespostaService = require("../../services/respostas/editarRespostaService");

async function editarRepostaController(req, res) {
    const respostaID = req.params.id;
    const { texto } = req.body;
    const novaResposta = editarRespostaService(respostaID, texto)

    res.end();
}
module.exports = editarRepostaController;