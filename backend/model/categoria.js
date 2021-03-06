const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    foto: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Categoria', categoriaSchema);
