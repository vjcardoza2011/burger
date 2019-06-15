var express = require('express');
var eRouter = express.Router();
var burger = require('../models/burger.js');


//ROUTES

eRouter.get('/', function (req, res) {
    res.redirect('/index');
});

eRouter.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var hbObject = { burgers: data };
        res.render('index', hbObject);
    });
});

eRouter.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

eRouter.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

// Exporting routes
module.exports = eRouter;