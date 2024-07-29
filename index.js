const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conection = require("./database/database");
const { Pergunta, Resposta } = require("./database/associations"); // Importar associações

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

Pergunta.findAll()
  .then((perguntas) => {
    console.log(perguntas);
  })
  .catch((err) => {
    console.error("Erro ao buscar perguntas:", err);
  });

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
app.get("/coisa", (req, res) => {
  res.render("coisa");
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

app.get("/pergunta/:id", async (req, res) => {
  try {
    const perguntaId = req.params.id;
    const pergunta = await Pergunta.findOne({
      where: { id: perguntaId },
      include: [
        {
          model: Resposta,
          as: "resposta",
        },
      ],
      order: [[{ model: Resposta, as: "resposta" }, "likes", "DESC"]],
    });

    if (!pergunta) {
      return res.status(404).send("Pergunta não encontrada.");
    }

    res.render("perguntadavez", { pergunta });
  } catch (error) {
    console.error("Erro ao buscar pergunta:", error);
    res.status(500).send("Erro interno do servidor.");
  }
});

// Rota para adicionar uma nova resposta a uma pergunta
app.post("/pergunta/:id/resposta", async (req, res) => {
  try {
    const perguntaId = req.params.id;
    const { texto } = req.body;

    const pergunta = await Pergunta.findByPk(perguntaId);
    if (!pergunta) {
      return res.status(404).send("Pergunta não encontrada.");
    }

    // Crie a nova resposta
    const novaResposta = await Resposta.create({
      texto,
      perguntaId, // Associa a resposta à pergunta correta
      data_criacao: new Date(), // Ou utilize o campo padrão de criação no banco
    });

    // Redirecione de volta para a página da pergunta
    res.redirect(`/pergunta/${perguntaId}`);
  } catch (error) {
    console.error("Erro ao criar resposta:", error);
    res.status(500).send("Erro interno do servidor.");
  }
});

// Rota para tratar da questão de likes nas respostas
app.post("/resposta/:id/like", async (req, res) => {
  const respostaId = req.params.id;

  try {
    const resposta = await Resposta.findByPk(respostaId);

    if (resposta) {
      resposta.likes += 1;
      await resposta.save();
      res.json({ success: true, likes: resposta.likes });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Resposta não encontrada" });
    }
  } catch (err) {
    console.error("Erro ao incrementar likes:", err);
    res.status(500).json({ success: false, message: "Erro no servidor" });
  }
});

app.listen(8080, () => {
  console.log("App rodando");
});
