var Receita = require('../models/Receita');

exports.save = function(nome, descricao, dataInclusao, callback) {
    new Receita({
        'nome' : nome,
        'descricao' : descricao,
        'dataInclusao' : dataInclusao
    }).save(function(error, receita) {
        
        if(error) {
            callback({error : 'não foi possível salvar'});
        } else {
            callback(receita);
        }

    });
}

exports.list = function(callback) {

    Receita.find({}, function(error, receitas) {

        if (error) {
            callback({error:'não foi possível encontrar as receitas'});
        } else {
            callback(receitas);
        }
    });
}

exports.delete = function(id, callback) {

    Receita.findById(id, function(error, receita) {

        if (error) {
            callback({error: 'não foi possível deletar'});
        } else {

            receita.remove(function(error) {
                if (!error) {
                    callback({resposta: 'Produto excluido com sucesso'});
                }
            });
        }
    });
}