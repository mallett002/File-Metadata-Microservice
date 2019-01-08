'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...

var app = express();

app.use(cors());

// serve static assets (css file) in the /public dir
app.use('/public', express.static(process.cwd() + '/public'));

// serve html file
app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });


app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
