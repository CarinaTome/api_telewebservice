var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TelemovelSchema = new Schema({
    nome: String,
    ram: String,
    armazenamento: String,
    resolucao: String,
    camera: String,
    preco: String,
});

module.exports = mongoose.model('telemovel', TelemovelSchema);