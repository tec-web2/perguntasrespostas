const { Pergunta, Resposta} = require("../../../database/associations"); 

async function lerRespostaPorID(respostaId){
    return await Resposta.findByPk(respostaId).then((resposta) => {
        return resposta;
    }).catch((error) => {
        console.error("Erro ao criar resposta:", error);
        throw error;
    });
}

module.exports = lerRespostaPorID;