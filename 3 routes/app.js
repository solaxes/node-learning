//load dependencies 
var express = require('express');
const bodyParser = require('body-parser');

var adminRoutes = require('./routes/admin');

var shopRoutes = require('./routes/shop');

// create application object
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

//create routing


app.use(adminRoutes);
app.use(shopRoutes);

// Setting up 404 page

app.use ((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>');
});


app.listen(3000, ()=>{
    console.log("server is running");
});

