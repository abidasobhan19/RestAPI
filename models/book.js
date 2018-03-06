var mongoose = require('mongoose');

//Schema For Books
var bookSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Book = module.exports = mongoose.model('Book',bookSchema);

module.exports.getBooks = function(callback,limit){

	Book.find(callback).limit(limit);

};

module.exports.getBookById = function(id,callback){

	Book.findById(id,callback);

};