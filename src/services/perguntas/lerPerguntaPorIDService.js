const { Pergunta, Resposta, Usuario, RespostaLike } = require("../../../database/associations");

async function lerPerguntaPorIDService(perguntaId) {
    const pergunta = await Pergunta.findOne({
        where: { id: perguntaId },
        include: [
            {
                model: Resposta,
                as: "respostas",
                include: [
                    {
                        model: Usuario,
                        as: "autor", // Inclui o autor da resposta
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
                ]
            },
            {
                model: Usuario,
                as: "autor", // Inclui o autor da pergunta
            }
        ],
    });

    // Ordena as respostas pelo número de curtidas em ordem decrescente
    if (pergunta && pergunta.respostas) {
        pergunta.respostas.sort((a, b) => b.likes.length - a.likes.length);
    }

    return pergunta;
}

module.exports = lerPerguntaPorIDService;
