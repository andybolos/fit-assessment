var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Assessment = new Schema({
	item_id: String,
	item_text: String,
	assessment_type: {
		type: String,
		enum: ['Individual', 'Promo']
	}
});

module.exports = Mongoose.model('Assessment', Assessment);