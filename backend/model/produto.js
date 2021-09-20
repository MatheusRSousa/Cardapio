const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    foto: {type: String, required: true},
    descricao: {type: String, required: true},
    valor: {type: Number, required: true},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref:'Categoria', required:true}
},{
    timestamps:true
});

module.exports = mongoose.model('Produto', produtoSchema);