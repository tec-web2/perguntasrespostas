const { Router} = require('express');
const perguntaRouter = require('./perguntasRouter');
const respostaRouter = require('./respostaRouter');
const buscarPerguntaRouter = require('./buscarPerguntaRouter');
const loginRouter = require('./login');
const routes = Router();

routes.use('/', perguntaRouter);
routes.use('/', respostaRouter)
routes.use('/', buscarPerguntaRouter)
routes.use('/', loginRouter)

module.exports =  routes;