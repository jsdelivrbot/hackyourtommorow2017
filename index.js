var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/build'));

// views is directory for all template files
app.set('views', __dirname + '/build');
app.set('view engine', 'jsx');

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
