// Dependencies
var express = require('express');
var bodyParser = require('body-parser');


// Open Server
var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + '/public'));

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//ROUTES
var router = require('./controllers/burgers_controller.js');
app.use('/', router);


//Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});