const { Pergunta, Resposta } = require("../../../database/associations"); 

async function lerPerguntaPorIDService(perguntaId){
    return await Pergunta.findOne({
        where: { id: perguntaId },
        include: [
            {
                model: Resposta,
                as: "respostas",
            },
        ],
        });
}

module.exports = lerPerguntaPorIDService;