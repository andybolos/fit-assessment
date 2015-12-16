var User = require('../models/UserModel');

module.exports = {
	submitPayment: function (req, res) {
		console.log('req.body', req.body);
		var email = req.body.email;
		
		User.findOne({ email: email }).exec(function (err, user) {
			if (user) {
				return res.status(409).json({success: false, message: 'Email is already in use.'})
			}
		})
		var token = req.body.stripeToken;
		var purchased = req.body.purchased.map(function (item) { 
			return item.id;
		});
		console.log('purchased', purchased)
		// TODO (jcd 12/16) use stripe API to charge a card (https://stripe.com/docs/tutorials/charges) then add the purchased items to the users 'paid' array using the email
		
		// make payment
		// if (err) { return res.status(500).json(err); }
		
		//payment success callback
		var newUser = new User({
			email: email,
			paid: purchased
		})
		newUser.save(function (err, saved) {
			if (err) {
				console.log(err);
				return res.status(500).json(err);
			}
			//TODO (jcd 12/16) Send email
			
			//TODO (jcd 12/16) put response in email send callback
			return res.status(200).json({ success: true });
		})
	}
}