const express = require('express');
const router = express.Router();

const { criaToken } = require('../services/seguranca_service');

router.post('/', (req, res) => {
    const {username, password} = req.body;

    if(username === 'admin' && password === 'admin'){
        res.json({token : criaToken(username, ['USER', 'ADMIN'])});
    }else if(username === 'user' && password === 'user'){
        res.json({token : criaToken(username, ['USER'])})
    }else{
        res.status(401).send({auth: false, erro: 'Login ou senha inválidos'})
    }
})

module.exports = router;