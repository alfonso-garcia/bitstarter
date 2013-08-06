var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
    var data = new Buffer(fs.readFileSync('index.html', 'utf8')).toString();
    response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
