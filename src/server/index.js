var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express();
const bodyParser = require('body-parser')

// Start up an instance of app
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
app.use(express.static('dist'))

console.log(__dirname)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
app.listen(9000, function () {
    console.log('Example app listening on port 9000!')
})

app.post('/test', function (req, res) {
    const formdata = new FormData();
    formdata.append("key",`${process.env.API_KEY}`);
    formdata.append("txt", `${req.body.text}`);
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...
    
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then((response)=>response.json())
    .then((data)=>res.send(data))
})

