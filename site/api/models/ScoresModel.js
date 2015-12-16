var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var moment = require('moment');

var Score = new Schema({
	first_name: String,
	last_name: String,
	date_taken: {
		type: Date,
		default: moment()
	},
	promo: {
		type: Boolean,
		default: false
	},
	promoCode: {
		type: String,
		default: null
	},
	//string value 'rcq', 'posi', etc
	assessment_id: String,
	scores: [Number]
});

module.exports = Mongoose.model('Score', Score);