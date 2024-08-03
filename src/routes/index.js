const { Router} = require('express');
const perguntaRouter = require('./perguntasRouter');
const respostaRouter = require('./respostaRouter');
const buscarPerguntaRouter = require('./buscarPerguntaRouter');
const routes = Router();

routes.use('/', perguntaRouter);
routes.use('/', respostaRouter)
routes.use('/', buscarPerguntaRouter)

module.exports =  routes;