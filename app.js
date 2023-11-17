var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');  //  require, not import for backend 
var apiRouter = require('./routes/places');   /* importing it !!!!!!!!!!!!!!!!!!! this is actually the api.js */

var app = express();
app.use(cors()); // cors adds some headers to the my response 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public'))); /* if we want to put the client inside of the public folder , we´d keep it  */
// so that "/" will be ... /api
app.use('/api/places', apiRouter); /* when I want to see the routes I will use jast /   use this route when i want to talk with api.js file  */


module.exports = app;
