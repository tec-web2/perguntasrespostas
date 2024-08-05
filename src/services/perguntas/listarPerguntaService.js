const { Pergunta, Resposta } = require("../../../database/associations"); 

async function listarPerguntaService(){
    return Pergunta.findAll({order: [["id", "DESC"]],
        include: [
            {
                model: Resposta,
                as: "resposta",
            },
        ]
    })
        .then((perguntas) => {
            return perguntas;
        })
        .catch((error) => {
            console.error("Erro ao listar perguntas:", error);
            throw error;
        });
}

module.exports = listarPerguntaService;