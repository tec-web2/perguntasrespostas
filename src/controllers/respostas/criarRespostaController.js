const lerPerguntaPorIDService = require("../../services/perguntas/lerPerguntaPorIDService");
const criarRespostaService = require("../../services/respostas/criarRespostaService");

async function criarRepostaController(req, res) {
    const perguntaID = req.params.id;
    const { texto, nome} = req.body;

    const pergunta = lerPerguntaPorIDService(perguntaID);
    if (!pergunta) {
        return res.status(404).send("Pergunta não encontrada.");
    }
    const novaResposta = criarRespostaService(texto, nome, perguntaID)

    res.redirect(`/pergunta/${perguntaID}`);
}
module.exports = criarRepostaController;