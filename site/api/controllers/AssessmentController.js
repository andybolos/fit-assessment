var Assessment = require('../models/AssessmentModel');
module.exports = {
	//get assessment by mongoId 
	getAssessment: function (req, res) {
		var id = req.params.id;
		Assessment.findById(id).exec(function (err, results) {
			if (err) {
				return res.status(500).json(err);
			}
			return res.status(200).json(results)
		})
	},
	getAssessmentByStrId: function () {
		var id = req.params.id;
		Assessment.findOne({ 'quiz_id': id })
			.exec(function (err, assessment) {
				if (err) {
					return res.status(500).json(err);
				}
				return res.status(200).json(assessment);
			})
	}
}