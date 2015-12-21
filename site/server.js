'use strict';

/**
* Dependencies
**/

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');


//********** Passport config *********//

passport.use(new LocalStrategy(
  function(username, password, done) {
    AdminUser.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
    ));

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  AdminUser.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		return res.status(403).send('Not logged in');
	}
};


//**********  Controllers  **********//
var AssessmentCtrl = require('./api/controllers/AssessmentController');
var ResultsCtrl = require('./api/controllers/ResultsController');
var PromoCtrl = require('./api/controllers/PromoController');
var ScoreCtrl = require('./api/controllers/ScoreController');
var PaymentCtrl = require('./api/controllers/PaymentController');
var UserCtrl = require('./api/controllers/UserController');

//**********  Models  **********//
var AdminUser = require('./api/models/AdminUserModel.js');

//**********  Start Express  **********//

var app = express();

//**********  Middleware  **********//

app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//**********  Auth Endpoints  **********//

app.post('/auth/login', passport.authenticate('local', { failureRedirect: '/#/login' }),
    function (req, res) {
        return res.status(200).json({ success: true, user: req.user.toJSON() });   
    });

app.get('/auth/logout',
  function(req, res){
      req.logout();
    return res.status(200).end();
    });


//********** Admin Endpoints  **********//

app.get('/api/admin/getPromoCodes', /*isAuthenticated,*/ PromoCtrl.getPromoCodes);

app.post('/api/admin/addPromoCode', /*isAuthenticated,*/ PromoCtrl.addPromoCode);

app.post('/api/admin/updatePromoCode/:id', /*isAuthenticated,*/ PromoCtrl.updatePromoCode);

app.delete('/api/admin/deletePromoCode/:id', /*isAuthenticated,*/ PromoCtrl.deletePromoCode);

//**********  Endpoints  **********//

app.post('/api/checkEmail', UserCtrl.checkEmail);

app.post('/api/submitFreeAssessment', ScoreCtrl.addFreeAssessment);

app.get('/api/getFreeResults/:id', ResultsCtrl.getFreeResults);

app.get('/api/getFreeEmail/:id', UserCtrl.getEmailFromScore);

app.post('/api/submitPayment', PaymentCtrl.submitPayment);

app.post('/api/makeRCQPayment', PaymentCtrl.makeRCQPayment);

app.get('/api/getUser/:id', UserCtrl.getUser);

app.post('/api/submitAssessment', ScoreCtrl.addAssessment);

app.get('/api/getAssessment/:id', AssessmentCtrl.getAssessment);

app.get('/api/getAssessmentByStr/:id', AssessmentCtrl.getAssessmentByStrId);

app.get('/api/myAssessments/:id', AssessmentCtrl.getMyAssessments);

app.get('/api/getFullResults/:id', ResultsCtrl.getFullResults);

app.get('/api/getFullRCQResults/:id', ResultsCtrl.getFullRCQResults);

//**********  Connections  **********//

var port = 2727;
var mongoUri = 'mongodb://localhost:27017/interafit';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Database connected at", mongoUri);
});

//**********  Listening  **********//

app.listen(port, function() {
    console.log("Connected on", port);
});
