var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// express needs a render engine defined
// otherwise an error is thrown
app.set('view engine', 'jade');

// For usage with XAMPP use localhost, e.g. :
//baseUrl = "http://localhost:3001";
baseUrl = "http://13.13.13.15:3001";

var server = require('http').Server(express);
io = require('socket.io')(server);
server.listen(81);

// intialize the db
var db = require('./resources/db');
db.initializeDB();

// add routes to app context
var router = require('./router')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
