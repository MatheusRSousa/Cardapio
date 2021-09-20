const express = require('express');
const router = express.Router();
const Categoria = require('../model/categoria');

router.get('/', async (req, res) => {
    res.json(await Categoria.find());
});

router.get('/:_id', async (req, res) => {
    res.json(await Categoria.findById(req.params._id));
});

router.post('/', async (req, res) => {
    res.json(await new Categoria(req.body).save());
});

router.put('/:_id',async (req, res) =>{
    let categoria = await Categoria.findById(req.params._id);
    res.json(await categoria.set(req.body).save())
})

router.delete('/:_id', async (req, res) =>{
    let categoria = await Categoria.findById(req.params._id);
    categoria.remove();
    res.json({msg : 'Categoria deletada com sucesso'});
})

module.exports = router;