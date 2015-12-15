var Assessment = require('../models/AssessmentModel');
module.exports = {
	getAssessment: function (req, res) {
		var id = req.body.id; // TODO (jcd 12/15) or req.params?
		Assessment.findById(id).exec(function (err, results) {
			if (err) {
				return res.status(500).json(err);
			}
			return res.status(200).json(results)
		})
	}
}