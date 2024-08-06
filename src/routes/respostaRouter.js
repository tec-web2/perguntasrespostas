const { Router } = require("express");
const criarRepostaController = require("../controllers/respostas/criarRespostaController");
const curtirRepostaController = require("../controllers/respostas/curtirRespostaController");
const deletarRespostaController = require("../controllers/respostas/deletarRespostaController");
const editarRepostaController = require("../controllers/respostas/editarRespotaController");
const ensureAuthenticate = require("../middlewares/ensureAuthenticate");

const respostaRouter = Router();


respostaRouter.post("/pergunta/:id/resposta", ensureAuthenticate, async (req, res) => {
  criarRepostaController(req, res)
});

respostaRouter.post("/resposta/:id/like", ensureAuthenticate, async (req, res) => {
  curtirRepostaController(req, res)
});

respostaRouter.delete("/resposta/:id/delete", ensureAuthenticate, async (req, res) => {
  deletarRespostaController(req, res)
});

respostaRouter.put("/resposta/:id/update", ensureAuthenticate, async (req, res) => {
  editarRepostaController(req, res)
})
module.exports = respostaRouter;
