// DEPENDENCIES 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// SETS UP THE EXPRESS APP
var app = express();
var PORT = process.env.PORT || 8080;

//SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
//THIS WILL PARSE YOUR APPLICATION/ JSON 
app.use(bodyParser.json());
//THIS WILL PARSE APPLICATION WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: true }));
//THIS WILL PARSE YOUR HTML BODY INTO A STRING 
app.use(bodyParser.text());
//THIS WILL PARSE VARIOUS CUSTOM JSON TYPES AS JSON
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//EXPRESS TO SERVE STATIC FILES
app.use(express.static(path.join(__dirname, '/public')));

//REQUIRES THE NECESSARY ROUTES
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//STARTS THE SERVER
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});