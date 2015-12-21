var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Promo = new Schema({
	client_name: String,
    client_email: String,
    code: {
      type: String,
      unique: true  
    },
	redemptions: [Date]
});

module.exports = Mongoose.model('Promo', Promo);