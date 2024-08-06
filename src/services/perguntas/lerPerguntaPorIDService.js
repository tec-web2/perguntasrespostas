const { Pergunta, Resposta, Usuario } = require("../../../database/associations"); 

async function lerPerguntaPorIDService(perguntaId){
    return await Pergunta.findOne({
        where: { id: perguntaId },
        include: [
            {
                model: Resposta,
                as: "respostas",
            },
            {
                model: Usuario,
                as: "autor",
            }
        ],
        });
}

module.exports = lerPerguntaPorIDService;