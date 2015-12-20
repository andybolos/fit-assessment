var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');

var AdminUser = new Schema({
    username: String,
    password: String
});

AdminUser.pre('save', function (next) {
	var user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, function (err, salt) {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, null, function (err, hash) {
			user.password = hash;
			return next();
		});
	});
});

AdminUser.methods.verifyPassword = function (password) {
	var dfd = Q.defer();

	bcrypt.compare(password, this.password, function (err, isMatch) {
		if (err) {
			dfd.reject(err);
		}
		else {
			dfd.resolve(isMatch);
		}
	});

	return dfd.promise;
};

AdminUser.options.toJSON = {
	transform: function (doc, ret) {
		delete ret.__v;
		delete ret.password;
		return ret;
	}
};

module.exports = Mongoose.model('AdminUser', AdminUser);