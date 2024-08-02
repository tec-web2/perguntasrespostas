const { Resposta } = require("../../../database/associations");

async function deletarRespostaService(respostaId) {
    const pergunta = await Resposta.findOne({
        where: { id: respostaId },
    });
    if (!pergunta) {
        return false
    }
    await Resposta.destroy({
        where: { id: respostaId },
    });
    return "Resposta apagada com sucesso";
}

module.exports = deletarRespostaService;
