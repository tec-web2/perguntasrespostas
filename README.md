
# Questione - Plataforma de Perguntas e Respostas

O projeto se trata de uma plataforma de perguntas e respostas, chamada de Questione, utilizando o banco de dados MySQL e frameworks modernos para o desenvolvimento back-end e front-end. A plataforma permite que os usuários façam perguntas, respondam a elas, e interajam por meio de curtidas nas respostas, com foco na qualidade e na inovação.

## Componentes do Projeto

### Banco de Dados

- Utilizamos o MySQL para armazenar as perguntas e respostas dos usuários.
- Quatro tabelas foram criadas: perguntas, respostas, usuarios e resposta_likes. Onde todas as tabelas tem certa dependência, por meio de chave estrangeira, a tabela usuarios.
- A tabela `perguntas` armazena o título, descrição e a data de criação .
- A tabela `respostas` armazena o texto da resposta, a data de criação, e está associada à pergunta correspondente por meio de uma chave estrangeira.
- A tabela `usuarios` armazena os atributos do usuário, como nome e email.
- A tabela `resposta_likes` armazena os atributos necessários para se trabalhar com a questão dos likes.

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

## Configurando o banco de dados

Dentro da pasta database, a um arquivo chamado Init.sql, nele contém as query sql para inicialização do banco de dados

Cria a tabela guiaperguntas

```bash
  CREATE DATABASE guiaperguntas;
```
Seta a tabela guiaperguntas

```bash
  USE guiaperguntas
```
Cria a tabela usuarios, junto as suas colunas

```bash
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Cria a tabela pergunta, junto as suas colunas

```bash
CREATE TABLE pergunta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES usuarios(id) ON DELETE SET NULL
);
```
Cria a tabela resposta, junto as suas colunas

```bash
CREATE TABLE resposta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    perguntaId INT,
    id_autor INT,
    FOREIGN KEY (perguntaId) REFERENCES pergunta(id) ON DELETE CASCADE,
    FOREIGN KEY (id_autor) REFERENCES usuarios(id) ON DELETE SET NULL
);
```

Cria a tabela resposta_likes, junto as suas colunas e dependências

```bash
CREATE TABLE resposta_likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    respostaId INT NOT NULL,
    id_autor INT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (respostaId) REFERENCES resposta(id) ON DELETE CASCADE,
    FOREIGN KEY (id_autor) REFERENCES usuarios(id) ON DELETE CASCADE,
    UNIQUE KEY (respostaId, id_autor)
);
```

Altera o Collate, para que não haje erro na busca.

```bash
  ALTER TABLE Pergunta MODIFY titulo VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

