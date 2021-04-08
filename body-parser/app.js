//load depencies
var express = require('express');

// create application object
var app = express();


//create routing

app.use('/product',(req, res) => {
    console.log(req.body);

    res.redirect('/');
} );

app.use('/', (req, res)=> {
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000, ()=>{
    console.log("server isrunning");
});

