var User = require('../models/UserModel');
var EmailCtrl = require('./EmailController');
var stripeTestApiKey = require('./config.js').stripeTestApiKey;
var stripe = require("stripe")(stripeTestApiKey);

//TODO (jcd 12/17) Switch simulate email for actual email code
module.exports = {
	submitPayment: function (req, res) {
		console.log(req.body);
		var email = req.body.tokenObj.email;
		var token = req.body.tokenObj.id;
		var amount = req.body.amount;
		
		//double check that email is not already associated with a user;
		User.findOne({ email: email }).exec(function (err, user) {
			if (err) {
				return res.status(500).json(err);
			}
			if (user) {
				return res.status(409).json({success: false, message: 'Email is already in use.'})
			}
			
			var newUser = new User({
				email: email
			});
			newUser.save(function(err, saved) {
				if (err) {
					return res.status(500).json(err);
				}
				
				var purchased = req.body.purchased.map(function (item) { 
					return item.id;
				});
				console.log('purchased', purchased)
				
				stripe.charges.create({
					amount: amount,
					currency: "usd",
					source: token, // obtained with Stripe.js
					description: "LifeFit Readiness to Change full report"
					}, function(err, charge) {
					// asynchronously called
						if (err) {
							return res.status(500).json(err);
						}
						saved.paid = purchased;
						saved.save(function(err, savedUser) {
							if (err) {
								saved.paid = [];
								return res.status(500).json(err);
							}
							
							// payment successful and recorded in user paid array
							//Email a link to the user page
							// EmailCtrl.sendUserEmail(user._id)
							// 	.then(function(response) {
							// 		return res.status(200).json({success: true});
							// 	})
							// 	.catch(function(err) {
							// 		return res.status(500).json(err);
							// 	})
							// })
							EmailCtrl.simulateUserEmail(savedUser._id)
								.then(function(response) {
									return res.status(200).json({success: true})
								})
								.catch(function(err) {
									return res.status(500).json(err);
								})
					
						});
					})
			})
			
		})	
	},
	makeRCQPayment: function(req, res) {
		
		var tokenObj = req.body.tokenObj;
		var amount = req.body.amount;
		console.log(tokenObj);
		
		User.findOne({email: tokenObj.email})
			.exec(function(err, user) {
				if (err) {
					return res.status(500).json(err);
				}
				if (user.paid.indexOf('rcq') !== -1) {
					user.paid.splice(user.paid.indexOf('rcq'), 1);
				}
				
				//make stripe payment with tokenObj.id
				stripe.charges.create({
					amount: amount,
					currency: "usd",
					source: tokenObj.id, // obtained with Stripe.js
					description: "LifeFit Readiness to Change full report"
					}, function(err, charge) {
					// asynchronously called
						if (err) {
							return res.status(500).json(err);
						}
						user.paid.push('rcq')
						user.save(function(err, saved) {
							if (err) {
								user.paid.splice(user.paid.indexOf('rcq'), 1);
								return res.status(500).json(err);
							}
							
							// payment successful and recorded in user paid array
							//Email a link to the user page
							// EmailCtrl.sendUserEmail(user._id)
							// 	.then(function(response) {
							// 		return res.status(200).json({success: true});
							// 	})
							// 	.catch(function(err) {
							// 		return res.status(500).json(err);
							// 	})
							// })
							EmailCtrl.simulateUserEmail(user._id)
								.then(function(response) {
									return res.status(200).json({success: true})
								})
								.catch(function(err) {
									return res.status(500).json(err);
								})
					
				});
			})
		
	})
}
}