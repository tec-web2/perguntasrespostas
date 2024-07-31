const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conection = require("../database/database");
const { Pergunta, Resposta } = require("../database/associations");
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

conection
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com sucesso.");
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados:", err);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


app.listen(8080, () => {
  console.log("App rodando");
});
