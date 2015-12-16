var User = require('../models/UserModel');

module.exports = {
	getUser: function (req, res) {
		var id = req.params.id;
		User.findById(id)
			.populate('assessments')
			.exec(function(err, user) {
				if (err) {
					res.status(500).json(err);
				}
				//TODO (jcd 12/16) might need to query to find the assessment names from the paid array
				return res.status(200).json(user);
			})
	}	
}