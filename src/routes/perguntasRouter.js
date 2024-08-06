const { Router } = require("express");
const perguntaRouter = Router();
const listarPerguntaController = require("../controllers/perguntas/listagemPerguntasController");
const perguntarController = require("../controllers/perguntas/perguntarController");
const salvarPerguntaController = require("../controllers/perguntas/salvarPerguntaController");
const lerPorPerguntaIDController = require("../controllers/perguntas/lerPorPerguntaIDController");
const deletarPerguntaController = require("../controllers/perguntas/deletarPerguntaController");
const editarPerguntaController = require("../controllers/perguntas/editarPerguntaController");
const ensureAuthenticate = require("../middlewares/ensureAuthenticate");


perguntaRouter.get("/", (req, res) => {
  listarPerguntaController(req, res);
});

perguntaRouter.get("/perguntar", (req, res) => {
  perguntarController(req, res);
});

perguntaRouter.post("/salvarpergunta", ensureAuthenticate, (req, res) => {
  salvarPerguntaController(req, res);
});

perguntaRouter.get("/pergunta/:id", (req, res) => {
  lerPorPerguntaIDController(req, res);
});

perguntaRouter.delete("/pergunta/delete/:id", ensureAuthenticate, (req, res) => {
  deletarPerguntaController(req, res);
});

perguntaRouter.put("/pergunta/:id/update", ensureAuthenticate, (req, res) => {
  editarPerguntaController(req, res);
});

module.exports = perguntaRouter;
