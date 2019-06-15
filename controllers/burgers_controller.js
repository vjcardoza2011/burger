var express = require('express');
var Router = express.Router();
var burger = require('../models/burger.js');


//ROUTES

Router.get('/', function (req, res) {
    res.redirect('/index');
});

Router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var hbObject = { burgers: data };
        res.render('index', hbObject);
    });
});

Router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

Router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

// Exporting routes
module.exports = Router;