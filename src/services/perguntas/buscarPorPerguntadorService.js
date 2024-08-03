const { Pergunta, Resposta } = require("../../../database/associations"); 

async function buscarPorPerguntadorService(perguntador){
    return await Pergunta.findAll({
        where: { perguntador: perguntador },
        include: [
            {
                model: Resposta,
                as: "resposta",
            },
        ],
        order: [[{ model: Resposta, as: "resposta" }, "likes", "DESC"]],
        });
}

module.exports = buscarPorPerguntadorService;