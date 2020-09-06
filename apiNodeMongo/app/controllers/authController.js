const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const mailer = require("../../src/modules/mailer");

const crypto = require("crypto");

const authCfg = require("../../config/auth.json");

const User = require("../models/user");

const router = express.Router();

function GeraToken(params = {}) {
    return jwt.sign(params, authCfg.secret, { 
        expiresIn: 86400,
    });
}

/* ROTAS POST DE INSERIR DADOS */
router.post('/register', async (req, res)=>{
    
    try {

        const {email} = req.body;

        if(await User.findOne({email})){
            return res.status(400).send({error: 'User already exists'});
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user,
            token: GeraToken({ id: user.id }),
        });
    }

    catch (err) {
        return res.status(400).send({error: 'registration failed!'});
    }

});

/* ROTAS DE AUTENTICAÇÃO COM JWT */

router.post('/authenticate', async (req, res)=>{
    const {email, password} = req.body;

    const user2 = await User.findOne({ email }).select('+password');

    if(!user2) {
        return res.status(400).send({error: "User not found this project"});
    }

    if(!await bcrypt.compare(password, user2.password)){
        return res.status(400).send({error: "Senha invalida"});
    }

    user2.password = undefined;

    

    
    res.send({
        user2,
        token: GeraToken({ id: user2.id }),
    }); 
    
})

/* ROTA ESQUECI MINHA SENHA */

router.post('/forget_password', async (req, res)=>{
    const {email} =req.body;

    try{
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).send({error: 'user not found'});

        }

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();

        now.setHours(now.getHours() + 1);

        //altera o usuario

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordReset: token,
                passwordResetExpires: now,
            }
        });

        mailer.sendMail({
            to: email,
            from: 'marlonfm01@hotmail.com',
            template: 'auth/forgot_pass',
            context: {token},

        }, (err)=>{
            if(err){
                console.log(err);
                return res.status(400).send({error: 'cannot send forgot pass email'});
            }

            return res.send({ status: 'OK' });
        })
    }

    catch(err){
        console.log(err);
        res.status(400).send({error: 'erro on forgot pass, try again'})
    }
});

/* ROTA RECUPERA SENHA */

router.post('/reset_password', async (req, res)=>{
    const {email, token, password} = req.body;

    try {
        const user =  await User.findOne({email})
            .select('+passwordReset passwordResetExpires');

            if(!user){
                return res.status(400).send({erro:  'user not find this project'});
            }

            if(token !==  user.passwordReset){
                return res.status(400).send({error: 'token invalido'});

            }

            const now = new Date();

            if(now > user.passwordResetExpires){
                return res.status(400).send({error: 'token expired, generate new'});

            }

            else {
                user.password = password;
            }

            await user.save();

            res.send({
                message: 'OK'
            });
    } catch(err) {
        return res.status(400).send({ error: 'cannot reset pass, try again' });
    }
});



module.exports = app => app.use('/auth', router);
