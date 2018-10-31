var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
var feedBackRouter = require('./server/routes/feedback');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.use(express.static('public'));

 
mongoose.connect('mongodb://localhost/local', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feedback', feedBackRouter);


app.listen(8080)

