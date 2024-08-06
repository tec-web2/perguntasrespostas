const { Usuario } = require("../../../database/associations"); 

async function lerUsuarioPorEmailService(email){
    return await Usuario.findOne({
        where: {email: email}
    }).then((resposta) => {
        return resposta;
    }).catch((error) => {
        return false
    });
}

module.exports = lerUsuarioPorEmailService;