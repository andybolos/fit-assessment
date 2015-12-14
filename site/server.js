'use strict';

/**
* Dependencies
**/

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


//**********  Controllers  **********//



//**********  Models  **********//


//**********  Start Express  **********//

var app = express();

//**********  Middleware  **********//

app.use(express.static('./public'));
app.use(cors());

//**********  Endpoints  **********//



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
