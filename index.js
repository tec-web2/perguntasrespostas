const express = require("express");
const bodyParser = require("body-parser");
const conection = require("./database/database");
const Pergunta = require("./database/Pergunta");

conection.authenticate().then(() => {
  console.log("Conexão estabelecida com sucesso.");
}).catch((err) => {
  console.error("Não foi possível conectar ao banco de dados:", err);
});

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((pergunta) => {
    res.render("index", {
      pergunta: pergunta,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});
app.get("/salvarpergunta", (req, res) => {
  res.send("Fomulário recebido com sucesso");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;

  Pergunta.findOne({ where: { id: id } })
    .then((pergunta) => {
      if (pergunta) {
        res.render("perguntadavez", { pergunta });
      } else {
        res.status(404).send("Pergunta não encontrada");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erro no servidor");
    });
});

app.listen(8080, () => {
  console.log("App rodando na porta 8080");
});
