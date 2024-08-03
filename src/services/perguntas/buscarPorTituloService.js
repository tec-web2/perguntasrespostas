const { Pergunta, Resposta } = require("../../../database/associations"); 

async function buscarPorTituloService(titulo){
    return await Pergunta.findAll({
        where: { titulo: titulo },
        include: [
            {
                model: Resposta,
                as: "resposta",
            },
        ],
        order: [[{ model: Resposta, as: "resposta" }, "likes", "DESC"]],
        });
}

module.exports = buscarPorTituloService;