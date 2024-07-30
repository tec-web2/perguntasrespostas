-- mysql -h localhost -u root -p


CREATE DATABASE guiaperguntas;
USE guiaperguntas
DROP TABLE IF EXISTS resposta;
DROP TABLE IF EXISTS pergunta;

CREATE TABLE pergunta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE resposta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    likes INT DEFAULT 0,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    perguntaId INT,
    FOREIGN KEY (perguntaId) REFERENCES pergunta(id) ON DELETE CASCADE
);