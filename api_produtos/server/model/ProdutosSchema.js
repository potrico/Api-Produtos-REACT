
const mongoose = require("mongoose");

const ProdutosSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    estoque: { type: String, required: true },
    valor: { type: String, required: true},
});

module.exports = mongoose.model("Produtos", ProdutosSchema);