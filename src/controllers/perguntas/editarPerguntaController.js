const editarPerguntaService = require("../../services/perguntas/editarPerguntaService");
const lerPerguntaPorIDService = require("../../services/perguntas/lerPerguntaPorIDService");

async function editarPerguntaController(req, res) {
    const perguntaId = req.params.id;
    const { titulo, descricao } = req.body;
    const perguntaParaEditar = await lerPerguntaPorIDService(perguntaId)
    if (perguntaParaEditar.autor.dataValues.id!=req.user_id){
        return res.status(400).send("Usuário errado")
    }
    const novaResposta = editarPerguntaService(perguntaId, titulo, descricao)

    res.end();
}
module.exports = editarPerguntaController;