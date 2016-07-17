var app = require('./config/app_config');
var db = require('./config/db_config');
var Receita = require('./models/Receita');
var receitaController = require('./controllers/receitaController');
var receitas = require('./routes/receitaRouter');

app.get('/', function(req, res) {
    res.end('Bem vindo a API de Receitas');
});

//rotas utilizadas para as receitas
app.use('/receitas',receitas);