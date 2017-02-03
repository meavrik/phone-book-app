"use strict";

var express = require("express");
var mongo = require("mongoose");
var cors = require("cors");

mongo.connect('mongodb://localhost/peoples')

var personSchema = {
    id: String,
    name: String,
    phone: String
}
let person = mongo.model('person', personSchema, 'clients')

let app = express();
app.use(cors());
var arr = [];
app.get('/', function(req, res) {
    person.find({}, {}, { limit: 20 }, function(err, doc) {
        res.send(doc);
    });
    // res.send("Hello world!!");
})

app.listen(27017);





/*let url = 'mongodb://localhost:27017/peoples';



router.get('/get-data', function(req, res, next) {
    mongo.connect(url, function(err, db) {

        var curser = db.collection('clients').find()
        curser.forEach(function(doc, err) {
            console.log(doc);
        });
    })
})

app.get('/', function(req, res) {
    person.find(function(err, doc) {
        res.send(doc);
    })
})*/








//Lets require/import the HTTP module
/*var http = require('http');

//Lets define a port we want to listen to
const PORT = 8080;

//We need a function which handles requests and send response
function handleRequest(request, response) {
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});*/