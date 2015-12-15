var moment = require('moment');
var Promo = require('../models/PromoModel');

module.exports = {
	addPromoCode: function (req, res) {
		var promo = req.body.promo;
		var newPromo = new Promo(promo);
		newPromo.save(function (err, results) {
			if (err) {
				return res.status(500).json(err);
			}
			//TODO (jcd 12/16) I'm returning all codes so the view can be updated. May need to be paginated at some point.
			Promo.find().exec(function (err, promos) {
				if (err) {
					return res.status(500).json(err);
				}
				return res.status(200).json(promos);
			})
			return res.status(200).json(results); 
		})
	},
	updatePromoCode: function (req, res) {
		// should send just the fields that need updated, and not the id, which should be in the endpoint params
		var id = req.params.id;
		var promo = req.body.promo;
		Promo.findByIdAndUpdate(id, promo, { new: true }).exec(function (err, updated) {
			if (err) {
				return res.status(500).json(err);
			}
			Promo.find().exec(function (err, promos) {
				if (err) {
					return res.status(500).json(err);
				}
				return res.status(200).json(promos);
			})
		})
	},
	// countUses: function (promos) {
	// 	var promosWithCount = promos;
	// 	var promises = [];
	// 	for (var i = 0; i < promosWithCount.length; i++) {
	// 		var dfd = Q.defer();
	// 		var promise = Promo.findById(promosWithCount).exec(err, promo) {
	// 			if (err) {
	// 				dfd.reject(err);
	// 			}
	// 			var redemptions = promo.redemptions || [];
	// 			var thisMonth = 0;
	// 			var lastMonth = 0;
	// 			var twoMonths = 0;
	// 			var total = redemptions.length;
	// 			for (var j = 0; j < total; j++) {
	// 				if (moment(redemptions[j]).isBetween())
	// 			}
	// 		}
	// 	}
		
	// 	Q.all(promises).then(function () {
	// 		return promosWithCount;
	// 	})
	// }
}