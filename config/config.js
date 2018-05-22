var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));



//mongoose.connect('mongodb://sampleapp:Master2017@ds038547.mlab.com:38547/expenses');

mongoose.connect('mongodb://sampleapp:marvellous@ds129780.mlab.com:29780/muistio');

app.use('/', router);
module.exports=app;
