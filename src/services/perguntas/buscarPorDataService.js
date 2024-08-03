const { Pergunta, Resposta } = require("../../../database/associations"); 

const { Op } = require("sequelize");
const sequelize = require("sequelize");

async function buscarPorDataService(data){
    return await Pergunta.findAll({
        where: sequelize.where(sequelize.fn('DATE', sequelize.col('Pergunta.data_criacao')), data),
        include: [
            {
                model: Resposta,
                as: "resposta",
            },
        ],
        order: [[{ model: Resposta, as: "resposta" }, "likes", "DESC"]],
    });
}

module.exports = buscarPorDataService;