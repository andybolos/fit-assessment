var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Assessment = new Schema({
	quiz_id: String,
	questions: [{
		item_id: String,
		item_text: String
	}]
});

module.exports = Mongoose.model('Assessment', Assessment);