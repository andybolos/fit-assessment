var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var moment = require('moment');

var Score = new Schema({
	name: String,
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
	assessment_name: String,
	assessment_id: {
		type: Schema.Types.ObjectId,
		ref: 'Assessment'
		},
	scores: [Number]
});

module.exports = Mongoose.model('Score', Score);