const { Router } = require("express");
const respostaRouter = Router();
const criarRepostaController = require("../controllers/respostas/criarResposrtaController");
const curtirRepostaController = require("../controllers/respostas/curtirRespostaController");

respostaRouter.post("/pergunta/:id/resposta", async (req, res) => {
  criarRepostaController(req, res)
});

respostaRouter.post("/resposta/:id/like", async (req, res) => {
  curtirRepostaController(req, res)
});

module.exports = respostaRouter;
