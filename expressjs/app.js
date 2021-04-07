// load the express library
var express = require('express');

// create application object
var app = express();


// create request handler

app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>');
});


// start the server
app.listen(3000);