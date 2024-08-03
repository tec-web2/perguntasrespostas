
# Plataforma de Perguntas e Respostas

O projeto se trata de uma plataforma de perguntas e respostas utilizando o banco de dados MySQL e frameworks modernos para o desenvolvimento back-end e front-end. A plataforma permite que os usuários façam perguntas, respondam a elas, e interajam por meio de curtidas nas respostas, com foco na qualidade e na inovação.

## Componentes do Projeto

### Banco de Dados

- Utilizamos o MySQL para armazenar as perguntas e respostas dos usuários.
- Duas tabelas principais foram criadas: perguntas e respostas.
- A tabela `perguntas` armazena o título, descrição, data de criação e o nome do usuário que fez a pergunta.
- A tabela `respostas` armazena o texto da resposta, o número de likes, quem respondeu, a data de criação, e está associada à pergunta correspondente por meio de uma chave estrangeira.

### Back-End

- Utilizamos Node.js com o framework Express para construir a lógica do servidor.
- O Sequelize, um ORM (Object-Relational Mapping), foi utilizado para gerenciar a comunicação com o banco de dados MySQL.
- Rotas foram implementadas para:
  - Criar novas perguntas.
  - Listar todas as perguntas.
  - Exibir detalhes de uma pergunta específica e suas respostas.
  - Adicionar respostas a perguntas existentes.
  - Incrementar o número de likes em respostas.

### Front-End

- A interface do usuário foi desenvolvida utilizando HTML, CSS e EJS, com o auxílio do Bootstrap para estilização.

## Funcionalidades

- Visualização de uma lista de perguntas recentes.
- Detalhamento de uma pergunta específica com suas respostas listadas.
- Formulário para adicionar novas perguntas e respostas.
- Botão para curtir as respostas, atualizando o número de likes dinamicamente.
- Botão para apagar perguntas e respostas.

## Documentação da API

#### Retorna a página inicial

```http
  localhost:8080/
```




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/tec-web2/perguntasrespostas.git
```

Entre no diretório do projeto

```bash
  cd .\perguntasrespostas\
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  nodemon src/server.js
```


## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

