const { Pergunta, Resposta, Usuario } = require("../../../database/associations");

async function listarPerguntaService() {
    return Pergunta.findAll({
        order: [["id", "DESC"]],
        include: [
            {
                model: Resposta,
                as: "respostas",
            },
            {
                model: Usuario,
                as: "autor",
            }
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
