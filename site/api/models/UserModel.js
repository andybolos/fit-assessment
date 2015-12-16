var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var User = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	paid: [String],
	assessments: [{type: Schema.Types.ObjectId, ref: 'Score'}]
});

module.exports = Mongoose.model('User', User);