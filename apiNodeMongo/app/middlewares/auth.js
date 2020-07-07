const jwt = require("jsonwebtoken");

const authCfg = require('../../config/auth.json');

module.exports = (req, res, next)=>{
        const authHeaders =  req.headers.authorization;

        /* verifica se o token é valido */
        if(!authHeaders){
            return res.status(401).send({error: 'No token provided'});
        }
        /* verifica se o token tá no fmt correto. Formato: bearer dsajkdhaskjdhsakcçasuuu808hjhdksajh */

        const parts = authHeaders.split(' '); //separa 2 partes divindo pelo espaço: Bearer dhsahdusa97hd9as

        if(!parts.length === 2){//verifica se realmente tem as 2 partes que foi dividida na constante acima.
            return res.status(401).send({error: 'Token error'});
        }

        const [ scheme, token ] = parts; // o SCHEME, é o BEARER, e o TOKEN, é o codigo doidão JWT que serão desestruturado.

        if(!/^Bearer$/i.test(scheme)){ //verifica se o nome SCHEME realmente começa com BEARER 
            
            return res.status(401).send({error: 'Token malformatted'});
        }


        jwt.verify(token, authCfg.secret, (err, decoded)=>{//decoded sera o ID do usuario caso esteja certo.    
            if(err) return res.status(401).send({error: 'Token Invalid'});

            req.userId = decoded.id; //passando o ID no decoded.id
            return next();
        }); 
};