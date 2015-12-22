var moment = require('moment');
var Promo = require('../models/PromoModel');
var Score = require('../models/ScoresModel');
var _ = require('underscore');
var Q = require('q');

module.exports = {
    getPromoCodes: function (req, res) {
        Promo.find()
        .lean()
        .exec(function (err, codes) {
            if (err) {
                return res.status(500).json(err);
            }
            module.exports.countUses(codes)
                .then(function (promosWithCount) {
                    console.log(promosWithCount);
                    return res.status(200).json(promosWithCount);
                })
        })  
    },
	addPromoCode: function (req, res) {
		var promo = req.body;
		var newPromo = new Promo(promo);
		newPromo.save(function (err, results) {
			if (err) {
				return res.status(500).json(err);
			}
			//TODO (jcd 12/16) I'm returning all codes so the view can be updated. May need to be paginated at some point.
			Promo.find().lean().exec(function (err, promos) {
				if (err) {
					return res.status(500).json(err);
				}
                module.exports.countUses(promos)
                    .then(function(promosWithCount) {
				        return res.status(200).json(promosWithCount);
                    })
			})
		})
	},
	updatePromoCode: function (req, res) {
		// should send just the fields that need updated, and not the id, which should be in the endpoint params
		var id = req.params.id;
		var promo = req.body;
		Promo.findByIdAndUpdate(id, promo, { new: true }).exec(function (err, updated) {
			if (err) {
				return res.status(500).json(err);
			}
			Promo.find().lean().exec(function (err, promos) {
				if (err) {
					return res.status(500).json(err);
				}
                module.exports.countUses(promos)
                    .then(function(promosWithCount) {
                        return res.status(200).json(promosWithCount);
                    })
			})
		})
	},
    deletePromoCode: function(req, res) {
        var id = req.params.id;
        Promo.findByIdAndRemove(id).exec(function(err, results) {
            if (err) {
                return res.status(500).json(err);
            }
            Promo.find().lean().exec(function(err, promos) {
                if (err) {
                    return res.status(500).json(err);
                }
                module.exports.countUses(promos)
                    .then(function(promosWithCount) {
                        return res.status(200).json(promosWithCount);
                    })
            })
        })
    },
	countUses: function (promos) {
        var dfd = Q.defer();
		var promosWithCount = promos;
		var promises = [];
        var totals = [];
        var tomorrow = moment(moment().startOf('day')).add(1, 'days');
        var thisMonth = moment().startOf('month');
        var lastMonth = moment(thisMonth).subtract(1, 'months'); 
        
		for (var i = 0; i < promosWithCount.length; i++) {
            console.log(promosWithCount[i])
            
            promosWithCount[i].total = promosWithCount[i].redemptions.length;
            
            promosWithCount[i].month2date = _.filter(promosWithCount[i].redemptions, function(date) {
                return (moment(date) >= thisMonth && moment(date) <= tomorrow )
            }).length;
            
            promosWithCount[i].lastMonth = _.filter(promosWithCount[i].redemptions, function(date) {
                return (moment(date) >= lastMonth && moment(date) <= thisMonth)
            }).length;
            

        }
        
        dfd.resolve(promosWithCount);
        
        return dfd.promise;
    },
    redeemPromo: function (req, res) {
        var code = req.body.code;
        Promo.findOne({ code: code }).exec(function (err, promo) {
            if (err) {
                return res.status(500).json(err);
            }
            if (!promo) {
                return res.status(200).json({success: false, message: 'Promo code not found'})
            }
            var now = moment();
            promo.redemptions.push(now);
            promo.save(function (err, saved) {
                if (err) {
                    return res.status(500).json(err);
                }
                return res.status(200).json({success: true})
            })
        })
    },
    submitPromoScore: function (req, res) {
        var scoreObj = req.body;
        var newScore = new Score(scoreObj);
        newScore.save(function (err, saved) {
            if (err) {
                return res.status(500).json(err);
            }
            console.log(saved);
            // TODO (jcd 12/21) Email results to client (maybe only once per day on cron job?)
            return res.status(200).json({success: true})
        })
    },
    getResultsByCode: function (req, res) {
        var code = req.params.code;
        Score.find({ promoCode: code }).exec(function (err, results) {
            if (err) {
                return res.status(500).json(err);
            }
            // TODO (jcd 12/21) Process these results
            return res.status(200).json({ results: results });
        })
    }
}