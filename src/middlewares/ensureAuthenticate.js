const { Request, Response, NextFunction } = require("express");
const { verify } = require("jsonwebtoken");


function ensureAuthenticate(request, response, next){
    const authHeader = request.headers.authorization;
    if(!authHeader){
        return response.status(400).render("login");
    }
    const token = authHeader.split(' ')[1];
    try {
        const {sub} = verify(token, 'secretWEB');
        request.user_id = sub
        next();
    } catch (error) {
        console.log(error)
        return response.status(400).send("login errado ou expirado");
    }
}

module.exports = ensureAuthenticate