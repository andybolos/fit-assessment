'use strict';

/**
* Dependencies
**/

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
// var passport = require('passport');
// var LocalStrategy = require('passport-local');


//**********  Controllers  **********//
var AssessmentCtrl = require('./api/controllers/AssessmentController');
var ResultsCtrl = require('./api/controllers/ResultsController');
var PromoCtrl = require('./api/controllers/PromoController');
var ScoreCtrl = require('./api/controllers/ScoreController');
var PaymentCtrl = require('./api/controllers/PaymentController');
var UserCtrl = require('./api/controllers/UserController');

//**********  Models  **********//


//**********  Start Express  **********//

var app = express();

//**********  Middleware  **********//

app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());

//**********  Endpoints  **********//

app.post('/api/checkEmail', UserCtrl.checkEmail);

app.post('/api/submitFreeAssessment', ScoreCtrl.addFreeAssessment);

app.get('/api/getFreeResults/:id', ResultsCtrl.getFreeResults);

app.post('/api/submitPayment', PaymentCtrl.submitPayment);

app.get('/api/getUser/:id', UserCtrl.getUser);

app.post('/api/submitAssessment', ScoreCtrl.addAssessment);

app.get('/api/getAssessment/:id', AssessmentCtrl.getAssessment);

app.get('/api/getAssessmentByStr/:id', AssessmentCtrl.getAssessmentByStrId);

app.get('/api/myAssessments/:id', AssessmentCtrl.getMyAssessments);

//TODO (jcd 12/15) match endpoints with front end

app.get('/api/getResults', ResultsCtrl.getResults);

app.post('/api/admin/promo', PromoCtrl.addPromoCode);

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
