const { Router } = require("express");
const cadastroController = require("../controllers/login/cadastroController");
const loginController = require("../controllers/login/loginController");
const authenticateController = require("../controllers/login/authenticateController");
const loginRouter = Router();


loginRouter.get("/cadastro", (req, res) => {
    cadastroController(req, res);
  });

loginRouter.get("/login", (req, res) => {
    loginController(req, res);
});

loginRouter.post("/authenticate", (req, res) =>{
    authenticateController(req, res)
})

module.exports = loginRouter;
