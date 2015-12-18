var User = require('../models/UserModel');

module.exports = {
	checkEmail: function (req, res) {
		var email = req.body.email;
		User.findOne({ email: email }).exec(function (err, user) {
			if (err) {
				return res.status(500).json(err);
			}
			if (user) {
				return res.status(200).json({ success: false, message: 'Email is already in use. Please try another email.' });
			}
			else {
				return res.status(200).json({ success: true, message: 'Email is available.' });
			}
		})	
	},
	getUser: function (req, res) {
		var id = req.params.id;
		User.findById(id)
			.populate('assessments')
			.exec(function(err, user) {
				if (err) {
					res.status(500).json(err);
				}
				return res.status(200).json(user);
			})
	},
	getEmailFromScore: function (req, res) {
		var scoreid = req.params.id;
		
		User.findOne({assessments: { $in: [scoreid]}})
			.exec(function(err, user) {
				if (err) {
					return res.status(500).json(err);
				}
				return res.status(200).json({email: user.email})
			})
	}
}