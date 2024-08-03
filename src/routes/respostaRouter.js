const { Router } = require("express");
const respostaRouter = Router();
const criarRepostaController = require("../controllers/respostas/criarRespostaController");
const curtirRepostaController = require("../controllers/respostas/curtirRespostaController");
const deletarRespostaController = require("../controllers/respostas/deletarRespostaController");
const editarRepostaController = require("../controllers/respostas/editarRespotaController");

respostaRouter.post("/pergunta/:id/resposta", async (req, res) => {
  criarRepostaController(req, res)
});

respostaRouter.post("/resposta/:id/like", async (req, res) => {
  curtirRepostaController(req, res)
});

respostaRouter.delete("/resposta/:id/delete", async (req, res) => {
  deletarRespostaController(req, res)
});

respostaRouter.put("/resposta/:id/update", async (req, res) => {
  editarRepostaController(req, res)
})
module.exports = respostaRouter;
