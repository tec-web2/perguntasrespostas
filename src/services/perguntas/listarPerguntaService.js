const { Pergunta, Resposta } = require("../../../database/associations"); 

async function listarPerguntaService(){
    return Pergunta.findAll({ raw: true, order: [["id", "DESC"]] })
        .then((perguntas) => {
            return perguntas;
        })
        .catch((error) => {
            console.error("Erro ao listar perguntas:", error);
            throw error;
        });
}

module.exports = listarPerguntaService;