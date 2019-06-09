var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var mysql = require('mysql');

=======
var session = require('express-session');
>>>>>>> tyndall-branch
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mysql = require('mysql');

var dbConnectionPool = mysql.createPool({
  host: 'localhost',
  database: 'UMAMI'
});

// var dbConnectionPool = mysql.createPool({
//   host: 'localhost',
//   database: 'webpage'
// });

var app = express();

var dbConnectionPool = mysql.createPool({ host: 'localhost', database: 'webpage'});
// var dbConnectionPool = mysql.createPool({ host: 'localhost', database: 'UMAMI'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
<<<<<<< HEAD
  secret:'admin',
=======
  secret: 'admin',
>>>>>>> tyndall-branch
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
<<<<<<< HEAD

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  req.pool = dbConnectionPool;
  next();
})

=======
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  req.pool = dbConnectionPool;
  next();
});
>>>>>>> tyndall-branch
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
