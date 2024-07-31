const lerRespostaPorID = require("../../services/respostas/lerRespostaPorID");

async function curtirRepostaController(req, res) {
    const respostaId = req.params.id;
    try {
        const resposta = await lerRespostaPorID(respostaId);

        if (resposta) {
            resposta.likes += 1;
            await resposta.save();
            res.json({ success: true, likes: resposta.likes });
        } else {
            res.status(404).json({ success: false, message: "Resposta não encontrada" });
        }
    } catch (err) {
        console.error("Erro ao incrementar likes:", err);
        res.status(500).json({ success: false, message: "Erro no servidor" });
    }
}
module.exports = curtirRepostaController;
