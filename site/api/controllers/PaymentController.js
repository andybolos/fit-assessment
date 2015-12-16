

module.exports = {
	submitPayment: function (req, res) {
		var email = req.body.email;
		var token = req.body.stripeToken;
		var purchased = req.body.purchased;
		// simulate payment
		// TODO (jcd 12/16) use stripe API to charge a card (https://stripe.com/docs/tutorials/charges) then add the purchased items to the users 'paid' array using the email
		console.log('paid for some assessments');
		return res.status(200).json('paid')
	}
}