const { Router } = require("express");
const cadastroController = require("../controllers/login/cadastro");
const loginController = require("../controllers/login/login");
const loginRouter = Router();


loginRouter.get("/cadastro", (req, res) => {
    cadastroController(req, res);
  });

loginRouter.get("/login", (req, res) => {
    loginController(req, res);
});

module.exports = loginRouter;
