var path = require('path');

//MODULE THAT EXPORTS THE HTML ROUTES 
module.exports = function(app) {

  //DEFAULT ROUTE TO THE HOMEPAGE
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

  //ROUTE TO THE SURVEY 
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

}