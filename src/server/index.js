const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var aylien = require('aylien_textapi')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

/*const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))*/

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile('index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
/*textapi.sentiment({
    //'url': req.body.text
    'text': 'John is a very good football player!'
}, function(error, response) {
    if (error === null) {
      console.log(response);
    }
});*/
    console.log(textapi);
    console.log('test');
    console.log(`Your API key is ${process.env.API_KEY}`);

/////// Below ADDED
app.post("/url", (req, res) => {
    const { text } = req.body;
    console.log("Request to '/url' endpoint", text);
    textapi.sentiment({ url: text }, (error, result, remaining) => {
        console.log("What is on the inside", result, remaining);
        res.send(result);
    });
});

//module.exports = app;
