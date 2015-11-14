var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.render('pages/home');
});

app.get('/platform', function(request, response) {
  response.render('pages/platform/index', {page: 'dash'});
});

app.get('/platform/(*)', function(request, response) {
  response.render('pages/platform/'+request.params[0]);
});

app.use(express.static(__dirname + '/assets'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});