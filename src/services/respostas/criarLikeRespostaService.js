const { RespostaLike } = require("../../../database/associations"); 

async function criarLikeRespostaService(respostaId, id_autor){
    return await RespostaLike.create({
        respostaId, 
        id_autor,
        data_criacao: new Date(), // Ou utilize o campo padrão de criação no banco
    }).then((resposta) => {
        return resposta;
    }).catch((error) => {
        return false
    });
}

module.exports = criarLikeRespostaService;