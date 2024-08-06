const { Usuario } = require("../../../database/associations"); 

async function criarUsuarioService(nome, email, senha_hash){
    return await Usuario.create({
        nome,
        email, 
        senha_hash,
        data_criacao: new Date(), // Ou utilize o campo padrão de criação no banco
    }).then((resposta) => {
        return resposta;
    }).catch((error) => {
        console.error("Erro ao criar usuario: ", error);
        throw error;
    });
}

module.exports = criarUsuarioService;