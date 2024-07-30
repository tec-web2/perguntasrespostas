# perguntasrespostas
Para executar o código tenha o servidor mysql rodando e depois execute `nodemon index.js`

Para conectar com o banco de dados da sua máquina é importante mudar os parâmetros da função conection ("guiaperguntas", "seu_usuário", "sua_senha"), que está no arquivo database.js

O arquivo Init.sql deve ser usado como copy dentro de uma query, dentro do guiaperguntas, no mysql workbench para criar as tabelas pergunta e resposta, juntamente com suas dependências. Um cuidado a se atentar, é que nos comandos presentes a drop das tabelas caso elas ja existam, então caso não queira perder seus dados ja cadastrados nessa tabela, retire os DROP.
