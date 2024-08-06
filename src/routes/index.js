const { Router} = require('express');
const perguntaRouter = require('./perguntasRouter');
const respostaRouter = require('./respostaRouter');
const buscarPerguntaRouter = require('./buscarPerguntaRouter');
const loginRouter = require('./login');
const usuarioRouter = require('./usuarioRouter');
const routes = Router();

routes.use('/', perguntaRouter);
routes.use('/', respostaRouter)
routes.use('/', buscarPerguntaRouter)
routes.use('/', loginRouter)
routes.use('/', usuarioRouter)

module.exports =  routes;