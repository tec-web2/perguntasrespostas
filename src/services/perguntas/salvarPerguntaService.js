const { Pergunta, Resposta } = require("../../../database/associations"); 

async function salvarPerguntaService(titulo, descricao){
    return Pergunta.create({
            titulo: titulo,
            descricao: descricao,
        }).then(() => {
            return
        })
        .catch((error) => {
            console.error("Erro ao criar perguntas:", error);
            throw error;
        });
}

module.exports = salvarPerguntaService;