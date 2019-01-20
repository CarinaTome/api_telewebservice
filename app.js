var app = require('./app_config');
var db = require('./db_config');
var telemovel = require('./telemovel');
var telemovelController = require('./telemovelController');
var routeTele = require('./telemovelRoute');


app.get('/',function(request, response){
    response.sendfile('index.html');
});

app.use('/telemoveis', routeTele);
