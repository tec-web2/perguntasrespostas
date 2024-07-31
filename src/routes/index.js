const { Router} = require('express');
const perguntaRouter = require('./perguntasRouter');
const respostaRouter = require('./respostaRouter');
const routes = Router();

routes.use('/', perguntaRouter);
routes.use('/', respostaRouter)


module.exports =  routes;