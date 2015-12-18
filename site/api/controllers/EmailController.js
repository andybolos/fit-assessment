var mandrill = require('mandrill-api/mandrill');
var config = require('./config.js')
var mandrill_client = new mandrill.Mandrill(config.mandrillApiKey);
var Q = require('q');

module.exports = {
	//for sending the free results, which link to a preview/payment page
	sendFreeResults: function(userEmail, assessmentId) {
		var dfd = Q.defer();
		var url = 'http://localhost:2727/#/results/preview/' + assessmentId;
		var message = {
			//TODO (jcd 12/17) update this with correct messages and emails
			'html': '<h2>Thank you for completing our free Readiness for Change assessment!</h2><br /><p>View your results at ' + url  +'</p>',
			'text': 'Thank you for taking our free Readiness for Change assessment! View your results at ' + url,
			'subject': 'LifeFit Assessment Results',
			'from_email': 'test@test.com',
			'to': [{
				'email': userEmail,
			}],
			'headers': {
				'Reply-To': 'test@test.com'
			}
		}
			
		mandrill_client.messages.send({'message': message}, 
		function(result) {
					console.log(result);
					dfd.resolve(result);
		}, 
		function(err) {
					console.log('A mandrill error occurred: ' + err.name + ' - ' + err.message);
					dfd.reject(err);
		})
		return dfd.promise;
	},
	//for all other emails, which send a link to the user's dashboard with paid assessments list and results links
	sendUserEmail: function(userId) {
		var dfd = Q.defer();
		var url = 'http://localhost:2727/#/list/' + userId;
		var message = {
			//TODO (jcd 12/17) update this with correct messages and emails
			'html': '<h2>Thank you!</h2><br /><p>Please visit your page at ' + url  +' to take assessments or view results!</p>',
			'text': 'Thank you! Please visit your page at ' + url + ' to take assessments or view results!',
			'subject': 'LifeFit Assessment Results',
			'from_email': 'test@test.com',
			'to': [{
				'email': userEmail,
			}],
			'headers': {
				'Reply-To': 'test@test.com'
			}
		}
			
		mandrill_client.messages.send({'message': message}, 
		function(result) {
					console.log(result);
					dfd.resolve(result);
		}, 
		function(err) {
					console.log('A mandrill error occurred: ' + err.name + ' - ' + err.message);
					dfd.reject(err);
		})
		return dfd.promise;
	},
	simulateFree: function(userEmail, assessmentId) {
		var dfd = Q.defer();
		
		console.log('simulating free assesment email');
		console.log('userEmail:', userEmail);
		console.log('assessmentId', assessmentId);
		dfd.resolve();
		
		return dfd.promise;
	},
	simulateUserEmail: function(userId) {
		var dfd = Q.defer();
		
		console.log('simulating user email');
		console.log('userId', userId);
		dfd.resolve();
		
		return dfd.promise;
	}
}