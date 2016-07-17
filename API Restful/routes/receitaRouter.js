var express = require('express');
var router = express.Router();
var receitaController = require('../controllers/receitaController');

router.get('/', function(req, res) {
     receitaController.list(function(resp){
        res.json(resp);
    });
});

router.post('/cadatrar', function(req, res) {
    var nome = req.body.nome;
    var descricao = req.body.descricao;
    var dataInclusao = req.body.dataInclusao;

    receitaController.save(nome, descricao, dataInclusao, function(resp) {
        res.json(resp);
    });
});

router.delete('/deletar/:id', function(req, res) {
    var id = req.params.id;

    receitaController.delete(id, function(resp) {
        res.json(resp);
    });
});

module.exports = router;