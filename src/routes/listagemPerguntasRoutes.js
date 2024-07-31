const listarPergunta = require("../controller/listagemPerguntaController"); 

async function listarPerguntaRouter(req, res){
    const pergunta = await listarPergunta();
    res.render("index", {
        pergunta: pergunta,
    });
}
module.exports = listarPerguntaRouter