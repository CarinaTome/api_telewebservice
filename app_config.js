const express = require('express');
var bodyParser = require('body-parser');
var port = '8080';
var app = module.exports = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://micael:data123@ds159574.mlab.com:59574/telemovel_db');
mongoose.connection.once('open', () => {
    console.log('Ligação efectuada com sucesso a Base de Dados');
});

app.listen(port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
})
