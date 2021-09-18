const express = require('express');
const router = express.Router();
const Produto = require('../model/produto');

router.get('/', async (req, res) => {
    res.json(await Produto.find());
});

router.get('/:_id', async (req, res) => {
    res.json(await Produto.findById(req.params._id));
});

router.post('/', async (req, res) => {
    res.json(await new Produto(req.body).save());
});

router.put('/:_id',async (req, res) =>{
    let produto = await Produto.findById(req.params._id);
    res.json(await produto.set(req.body).save())
})

router.delete('/:_id', async (req, res) =>{
    let produto = await Produto.findById(req.params._id);
    produto.remove();
    res.json({msg : 'Produto deletado com sucesso'});
})

module.exports = router;