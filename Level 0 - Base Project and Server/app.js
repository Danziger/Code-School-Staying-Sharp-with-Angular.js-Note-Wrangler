var express = require('express');
var app = express();

// Load Express Configuration
require('./express-config')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

// Load routes
require('./routes/user')(app); //user routes
require('./routes/session')(app); // session routes, mostly for authentication
require('./routes/note')(app); // note routes
require('./routes/category')(app); // category routes

// Start the server
//var server = app.listen(8000, function() {
//    console.log('Listening on port %d', server.address().port);
//});

module.exports = app;