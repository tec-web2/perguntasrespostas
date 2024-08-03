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

-- Caso as tabelas do  banco ja estejam criadas, acrescente a linha de código abaixo
--p/ acrescentar a coluna perguntador

ALTER TABLE pergunta ADD COLUMN perguntador VARCHAR(255);
ALTER TABLE resposta ADD COLUMN nome_autor VARCHAR(255);

-- importante pra funcionar a busca, alguns caracteres só funcionam com esse collation
ALTER TABLE Pergunta MODIFY titulo VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
