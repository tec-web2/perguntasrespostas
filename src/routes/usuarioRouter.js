const { Router } = require("express");
const criarUsuarioController = require("../controllers/usuario/criarUsuarioController");
const usuarioRouter = Router();


usuarioRouter.post("/usuario/create", (req, res) => {
    criarUsuarioController(req, res);
});

module.exports = usuarioRouter;
