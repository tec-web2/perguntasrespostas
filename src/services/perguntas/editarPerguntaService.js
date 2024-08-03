const { Pergunta } = require("../../../database/associations");

async function editarPerguntaService(perguntaId, novoTitulo, novaDescricao) {
    try {
        const pergunta = await Pergunta.findByPk(perguntaId);

        if (!pergunta) {
            throw new Error("Pergunta não encontrada.");
        }

        pergunta.titulo = novoTitulo;
        pergunta.descricao = novaDescricao;
        await pergunta.save(); // Salva as mudanças no banco de dados

        return pergunta;
    } catch (error) {
        console.error("Erro ao editar pergunta:", error);
        throw error;
    }
}

module.exports = editarPerguntaService;
