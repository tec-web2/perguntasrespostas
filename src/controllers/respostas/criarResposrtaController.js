const lerPerguntaPorIDService = require("../../services/perguntas/lerPerguntaPorIDService");
const criarRespostaService = require("../../services/respostas/criarRespostaService");

async function criarRepostaController(req, res) {
    const perguntaID = req.params.id;
    console.log(perguntaID)
    const { texto } = req.body;
    console.log(texto)

    const pergunta = lerPerguntaPorIDService(perguntaID);
    if (!pergunta) {
        return res.status(404).send("Pergunta não encontrada.");
    }
    const novaResposta = criarRespostaService(texto, perguntaID)

    res.redirect(`/pergunta/${perguntaID}`);
}
module.exports = criarRepostaController;