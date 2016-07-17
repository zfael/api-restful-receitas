var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceitaSchema = new Schema({
    nome : String,
    descricao : String,
    dataInclusao : String
});

module.exports = mongoose.model('Receita', ReceitaSchema);