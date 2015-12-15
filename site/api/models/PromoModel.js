var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Promo = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	redemptions: [Date]
});

module.exports = Mongoose.model('Promo', Promo);