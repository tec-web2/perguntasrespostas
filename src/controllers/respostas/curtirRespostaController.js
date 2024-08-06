const lerRespostaPorID = require("../../services/respostas/lerRespostaPorID");
const criarLikeRespostaService = require("../../services/respostas/criarLikeRespostaService")

async function curtirRepostaController(req, res) {
    const respostaId = req.params.id;
    const user_id = req.user_id
    try {
        const resposta = await lerRespostaPorID(respostaId);

        if (resposta) {
            const like = await criarLikeRespostaService(respostaId, user_id);
            if (!like){
                return res.status(400).send("Like duplicado")
            }
            res.status(200).send("Resposta criada com sucesso")
        } else {
            res.status(404).json({ success: false, message: "Resposta não encontrada" });
        }
    } catch (err) {
        console.error("Erro ao incrementar likes:", err);
        res.status(500).json({ success: false, message: "Erro no servidor" });
    }
}
module.exports = curtirRepostaController;
