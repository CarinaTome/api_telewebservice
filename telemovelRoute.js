var express = require('express');
var router = express.Router();
var telemovelController = require('./telemovelController');


router.get('/', function (req, res) {
    telemovelController.list(function (resp) {
        res.json(resp);
    })

});

router.post('/registo', function (req, res) {
    var nome = req.body.nome;
    var ram = req.body.ram;
    var armazenamento = req.body.armazenamento;
    var resolucao = req.body.resolucao;
    var camera = req.body.camera;
    var preco = req.body.preco;

    telemovelController.save(nome, ram, armazenamento, resolucao, camera, preco, function (resp) {
        res.json(resp);
    });
});

router.delete('/apagar/:id', function (req, res) {
    var id = req.params.id;

    telemovelController.delete(id, function (resp) {
        res.json(resp);
    });
})

module.exports = router;
