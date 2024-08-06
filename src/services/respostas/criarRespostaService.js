const { Pergunta, Resposta } = require("../../../database/associations"); 

async function criarRespostaService(texto, id_autor, perguntaID){
    return await Resposta.create({
        texto,
        perguntaId: perguntaID, 
        id_autor,
        data_criacao: new Date(), // Ou utilize o campo padrão de criação no banco
    }).then((resposta) => {
        return resposta;
    }).catch((error) => {
        console.error("Erro ao criar resposta:", error);
        throw error;
    });
}

module.exports = criarRespostaService;