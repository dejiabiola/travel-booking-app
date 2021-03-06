const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const requestHandler = require('./requestHandler');



const app = express();

app.use(cors());

app.use(bodyParser.json())  // to use json

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080')
})




app.post('/getCoordinates', requestHandler.getCoordinates);

app.post('/getWeather', requestHandler.getWeather)

app.post('/getImage', requestHandler.getImage)

app.post('/getCountryDetail', requestHandler.getCountryDetail)


