const { compare } = require('bcrypt');
const { sign } = require("jsonwebtoken")
const lerUsuarioPorEmailService = require('../../services/usuario/lerUsuarioPorEmailService');

async function authenticateController(req, res) {
    const {email, password } = req.body;
    const usuario = await lerUsuarioPorEmailService(email)
    if (!usuario){
        return res.status(404).send("Usuário não encontrado")
    }
    const passwordMath = await compare(password, usuario.senha_hash);
    if (!passwordMath){
        return res.status(404).send("Usuário não encontrado")
    }
    const token = sign({}, 'secretWEB', {
        subject: usuario.id.toString(),
        expiresIn: '30d',
    });
    res.send(token);
}
module.exports = authenticateController;
