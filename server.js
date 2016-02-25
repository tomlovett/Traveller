// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

mongoose.connect('mongodb://localhost/earth')
var controller = require('./Controllers/controller.js')

// Routes \\
app.get('/', function(req, res) {
  res.sendFile('index.html', {root: './Public/html'})
});

// API \\
app.get('/api/countries', controller.loadCountries)

app.post('/api/search', controller.searchCountries)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})