"use strict";
var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
//app.use(express.static('public'));

//API
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop')

var Books = require('./models/books.js');

//--->> POST BOOKS <<<----//
app.post('books', function(req, res){
	console.log('api post')
	Books.create(book, function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	})
})
//END API

app.get('*',function(req,res){
	console.log('dsadasda')
	res.sendFile(path.resolve(__dirname,'public','index.html'));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function(){
	console.log('listening on port 3000');
})