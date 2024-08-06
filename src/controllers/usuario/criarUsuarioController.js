const { hash } = require('bcrypt');
const criarUsuarioService = require('../../services/usuario/criarUsuarioService');

async function criarUsuarioController(req, res) {
    const { nome, email, password } = req.body;
    const novoUsuario = criarUsuarioService(nome, email, await hash(password, 6))
    res.redirect('/login');
}
module.exports = criarUsuarioController;