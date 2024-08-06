-- Conexão ao MySQL
-- mysql -h localhost -u root -p

-- Deleta o banco de dados existente e cria um novo
DROP DATABASE IF EXISTS guiaperguntas;
CREATE DATABASE guiaperguntas;
USE guiaperguntas;

-- Deleta as tabelas existentes caso existam
DROP TABLE IF EXISTS resposta;
DROP TABLE IF EXISTS pergunta;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS resposta_likes;

-- Criação da tabela 'usuarios'
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela 'pergunta'
CREATE TABLE pergunta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES usuarios(id) ON DELETE SET NULL
);


-- Criação da tabela 'resposta'
CREATE TABLE resposta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    perguntaId INT,
    id_autor INT,
    FOREIGN KEY (perguntaId) REFERENCES pergunta(id) ON DELETE CASCADE,
    FOREIGN KEY (id_autor) REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Criação da tabela 'resposta_likes' para controlar os likes nas respostas
CREATE TABLE resposta_likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    respostaId INT NOT NULL,
    id_autor INT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (respostaId) REFERENCES resposta(id) ON DELETE CASCADE,
    FOREIGN KEY (id_autor) REFERENCES usuarios(id) ON DELETE CASCADE,
    UNIQUE KEY (respostaId, id_autor)
);

-- Ajuste do collation para a tabela 'pergunta'
ALTER TABLE pergunta MODIFY titulo VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

