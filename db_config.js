var mongoose = require('mongoose');

var urlString = 'mongodb://micael:data123@ds159574.mlab.com:59574/telemovel_db';

mongoose.connect(urlString, function (err, res) {
    if (err) {
        console.log('Impossivel efectuar a ligação a:' + urlString);
    }
    else {
        console.log('Ligação efectuada a:' + urlString);
    }
});