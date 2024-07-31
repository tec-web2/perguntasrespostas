const { Pergunta, Resposta } = require("../../../database/associations"); 

async function criarRespostaService(texto, perguntaID){
    return await Resposta.create({
        texto,
        perguntaId: perguntaID, // Associa a resposta à pergunta correta
        data_criacao: new Date(), // Ou utilize o campo padrão de criação no banco
    }).then((resposta) => {
        return resposta;
    }).catch((error) => {
        console.error("Erro ao criar resposta:", error);
        throw error;
    });
}

module.exports = criarRespostaService;