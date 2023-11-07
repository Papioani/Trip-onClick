var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');  //  require, not import for backend 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors()); // cors adds some headers to the my response 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public'))); /* if we want to put the client inside of the public folder , we´d keep it  */

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;
