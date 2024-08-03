const { Pergunta, Resposta } = require("../../../database/associations"); 

async function editarRespostaService(respostaId, novoTexto) {
    try {
        const resposta = await Resposta.findByPk(respostaId);

        if (!resposta) {
            throw new Error("Resposta não encontrada.");
        }

        resposta.texto = novoTexto;
        await resposta.save(); // Salva as mudanças no banco de dados

        return resposta;
    } catch (error) {
        console.error("Erro ao editar resposta:", error);
        throw error;
    }
}

module.exports = editarRespostaService;
