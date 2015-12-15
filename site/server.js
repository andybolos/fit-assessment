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

//**********  Models  **********//


//**********  Start Express  **********//

var app = express();

//**********  Middleware  **********//

app.use(express.static('./public'));
app.use(cors());

//**********  Endpoints  **********//
//TODO (jcd 12/15) match endpoints with front end
app.get('/api/getAssessment', AssessmentCtrl.getAssessment);

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
