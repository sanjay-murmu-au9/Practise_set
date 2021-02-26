var express = require('express');
var app = express();


var port = 9900;
var port = process.env.PORT || 9900;

var menu=[
    {link: '/',page:"Home"},
    {link:'/hotel',page:"Hotel"},
    {link: '/city',page: 'City'}
]

var HotelRouter = require('./src/routes/HotelRouter')(menu);
var CityROuter = require('./src/routes/cityRouter')(menu);


app.use(express.static(__dirname+'/public'));


app.set('views','./src/views');

//('view engine')-->he likhna hota hai;
app.set('view engine', 'ejs')


app.get('/', function(req, res){
    // res.send('Hi THis is Sanjay ')
    res.render("index",{title:"Home",menu:menu})

});

app.use('/hotel', HotelRouter);
app.use('/city', CityROuter);

app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
});
