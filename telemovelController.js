var telemovel = require('./telemovel');

exports.save = function (nome, ram, armazenamento, resolucao, camera, preco, callback) {
    new telemovel({
        'nome': nome,
        'ram': ram,
        'armazenamento': armazenamento,
        'resolucao': resolucao,
        'camera': camera,
        'preco': preco,
    }).save(function (error, telemovel) {
        if (error) {
            callback({ error: 'Nao foi possivel guardar' });
        } else {
            callback(telemovel)
        }
    });
}

exports.list = function (callback) {
    telemovel.find({}, function (error, telemovel) {
        if (error) {
            callback({ error: 'Não foi possivel encontrar nenhum resultado !' });
        } else {
            callback(telemovel);
        }
    });

}

exports.delete = function (id, callback) {
    telemovel.findById(id, function (error, telemovel) {
        if (error) {
            callback({ error: 'Não foi possivel excluir o ficheiro !' });
        } else {
            telemovel.remove(function (error) {
                if (!error) {
                    callback({ resposta: "Telemovel excluido com sucesso !" })
                }
            });
        }
    })

}