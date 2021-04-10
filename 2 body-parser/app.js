//load depencies
var express = require('express');
const bodyParser = require('body-parser');


// create application object
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

//create routing

app.use('/add-product',(req, res) => {
    
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Save</button></form>');
    
} );

app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})


app.use('/', (req, res)=> {
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000, ()=>{
    console.log("server is running");
});

