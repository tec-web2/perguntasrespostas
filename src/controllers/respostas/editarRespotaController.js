const editarRespostaService = require("../../services/respostas/editarRespostaService");
const lerRespostaPorID = require("../../services/respostas/lerRespostaPorIDService");

async function editarRepostaController(req, res) {
    const respostaID = req.params.id;
    const { texto } = req.body;
    const resposta = await lerRespostaPorID(respostaID)
    if (resposta.autor.dataValues.id !=req.user_id){
        return res.status(400).send("Usuário errado")
    }

    const novaResposta = editarRespostaService(respostaID, texto)

    res.end();
}
module.exports = editarRepostaController;