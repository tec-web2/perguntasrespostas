const buscarPorDataService = require("../../services/perguntas/buscarPorDataService");

async function buscarPorDataController(req, res) {
    var data = req.body.data;
    const perguntas = await buscarPorDataService(data);
    res.render("resultadoBusca", {
        pergunta: perguntas,
    });
}
module.exports = buscarPorDataController;