var express = require('express');
var path = require('path');
var app = express();
var history = require('connect-history-api-fallback');
var helmet  require('helmet');
app.use(helmet());

app.use(history());

app.use(express.static(path.join(__dirname,'..','dist')));

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});
