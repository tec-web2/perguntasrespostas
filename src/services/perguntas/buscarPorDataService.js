const { Pergunta, Resposta, Usuario } = require("../../../database/associations"); 

const { Op } = require("sequelize");
const sequelize = require("sequelize");

async function buscarPorDataService(data){
    return await Pergunta.findAll({
        where: sequelize.where(sequelize.fn('DATE', sequelize.col('Pergunta.data_criacao')), data),
        include: [
            {
                model: Resposta,
                as: "respostas",
            },
            {
                model: Usuario,
                as: "autor",
            }
        ],
    });
}

module.exports = buscarPorDataService;