const express = require('express');
const router = express.Router();
const Categoria = require('../model/categoria');
const {isAutenticado, isAutorizado} = require('../services/seguranca_service');

router.get('/', async (req, res) => {
    res.json(await Categoria.find());
});

router.get('/:_id', async (req, res) => {
    res.json(await Categoria.findById(req.params._id));
});

router.post('/', isAutenticado, isAutorizado(['ADMIN']), async (req, res) => {
    res.json(await new Categoria(req.body).save());
});

router.put('/:_id',isAutenticado, isAutorizado(['ADMIN']), async (req, res) =>{
    let categoria = await Categoria.findById(req.params._id);
    res.json(await categoria.set(req.body).save())
})

router.delete('/:_id', isAutenticado, isAutorizado(['ADMIN']), async (req, res) =>{
    let categoria = await Categoria.findById(req.params._id);
    categoria.remove();
    res.json({msg : 'Categoria deletada com sucesso'});
})

module.exports = router;