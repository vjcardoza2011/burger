// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path')
var app = express();

// Open Server
var PORT = process.env.PORT || 3000;


app.use(express.static(process.cwd() + '/public'));

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//ROUTES
var router = require('./controllers/burgers_controller.js');
app.use('/', router);


//Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});