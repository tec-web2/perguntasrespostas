const { Router } = require("express");
const buscarperguntaGeralController = require("../controllers/buscarPergunta/buscarPerguntaGeralController");
const buscarPorDataController = require("../controllers/buscarPergunta/buscarPorDataController");
const buscarpPorTituloController = require("../controllers/buscarPergunta/buscarPorTituloController");
const buscarPorPerguntadorController = require("../controllers/buscarPergunta/buscarPorPerguntadorController");
const buscarPerguntaRouter = Router();


buscarPerguntaRouter.get("/buscarpergunta", (req, res) => {
  buscarperguntaGeralController(req, res);
});

buscarPerguntaRouter.post("/buscarpergunta/data", (req, res) => {
  buscarPorDataController(req, res);
});

buscarPerguntaRouter.post("/buscarpergunta/titulo", (req, res) => {
  buscarpPorTituloController(req, res);
});

buscarPerguntaRouter.post("/buscarpergunta/perguntador", (req, res) => {
  buscarPorPerguntadorController(req, res);
});


module.exports = buscarPerguntaRouter;
