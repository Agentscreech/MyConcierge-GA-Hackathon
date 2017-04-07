//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');

//Mongoose schemas
var Provider = require('./models/provider');
var Listing = require('./models/listing');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myconcierge');

//Setup static dir
app.use(express.static(path.join(__dirname, 'static')));

//Decode POST data in JSON and URL encoded formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(require('morgan')('dev'));

//placeholder for bringing in the controllers/routers
app.use('/api/providers', require('./controllers/providers'));


//root route
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

var server = app.listen((process.env.PORT || 3000), function(){
    console.log('listening to the smooth requests on port 3000');
});
