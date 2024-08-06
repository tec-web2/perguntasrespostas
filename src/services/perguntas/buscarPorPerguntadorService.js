const { Pergunta, Resposta, Usuario} = require("../../../database/associations"); 

async function buscarPorPerguntadorService(perguntador){
    return await Pergunta.findAll({
        include: [
            {
                model: Resposta,
                as: "respostas",
            },
            {
                model: Usuario,
                as: "autor",
                where: { nome: perguntador },
            }
        ],
        });
}

module.exports = buscarPorPerguntadorService;