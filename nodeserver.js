var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
//var dbURL = "mongodb://localhost:27017/employeedb";
var dbURL = 'mongodb://employee:emp@ds239128.mlab.com:39128/employeedb';
mongoose.connect(dbURL);
//mongoose.Promise = global.Promise;
//var db = mongoose.connection;

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


mongoose.connection.on('connected',function(){
    console.log('connected to db');
})


app.use(function (req,res,next) {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'fale');

    next();    
})

app.use('/api',require('./api'));

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})

var port = process.env.port || 8080;

app.listen(port, function(){
    console.log('Server running at http://127.0.0.1:8080/');
});