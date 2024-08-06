const { Resposta, Usuario, RespostaLike } = require("../../../database/associations");

async function lerRespostaPorID(respostaId) {
    try {
        const resposta = await Resposta.findOne({
            where: { id: respostaId },
            include: [
                {
                    model: Usuario,
                    as: "autor", // Inclui o usuário que criou a resposta
                },
                {
                    model: RespostaLike,
                    as: "likes", // Inclui as curtidas da resposta
                    include: [
                        {
                            model: Usuario,
                            as: "autorLike", // Inclui o usuário que curtiu a resposta
                        }
                    ]
                }
            ],
        });

        if (!resposta) {
            throw new Error("Resposta não encontrada.");
        }

        return resposta;
    } catch (error) {
        console.error("Erro ao buscar resposta:", error);
        throw error;
    }
}

module.exports = lerRespostaPorID;
