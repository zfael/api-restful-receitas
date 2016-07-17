var mongoose = require('mongoose');

//var urlString = 'mongodb://localhost/API';
var urlString = 'mongodb://root:rpbroot@ds023315.mlab.com:23315/receitas-api';

mongoose.connect(urlString, function(error, res) {
    if (error) {
        console.log('Não foi possivel conectar a: ' + urlString);
    } else {
        console.log('Conectado a: ' + urlString);
    }
});