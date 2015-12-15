var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Score = new Schema({
	item_id: String,
	item_text: String,
	Score_type: {
		type: String,
		enum: ['Individual', 'Promo']
	}
});

module.exports = Mongoose.model('Score', Score);