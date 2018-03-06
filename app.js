var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Add Middle Ware
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

app.get('/',function(req,res){
	res.send("Please use /api/books or /api/genre");

});

app.get('/api/genres',function(req,res){
	// res.send("Please use /api/books or /api/genre");

	Genre.getGenres(function(err,genres){

		if(err){
			throw err;
		}

		res.json(genres);

	});

});


// Add Genre
app.post('/api/genres',function(req,res){
	// res.send("Please use /api/books or /api/genre");

	var genre = req.body;

	Genre.addGenre(genre, function(err,genre){

		if(err){
			throw err;
		}

		res.json(genre);

	});

});

app.get('/api/books',function(req,res){
	// res.send("Please use /api/books or /api/genre");

	Book.getBooks(function(err,books){

		if(err){
			throw err;
		}

		res.json(books);

	});

});

app.get('/api/books/:_id',function(req,res){
	// res.send("Please use /api/books or /api/genre");

	Book.getBookById(req.params._id,function(err,book){

		if(err){
			throw err;
		}

		res.json(book);

	});

});

app.listen(3000);

console.log("Running on Port 3000.....")