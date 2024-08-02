const { Pergunta } = require("../../../database/associations");

async function apagarPerguntaPorIDService(perguntaId) {
    const pergunta = await Pergunta.findOne({
        where: { id: perguntaId },
    });

    if (!pergunta) {
        return false
    }

    await Pergunta.destroy({
        where: { id: perguntaId },
    });
    return "Pergunta apagada com sucesso";
}

module.exports = apagarPerguntaPorIDService;
