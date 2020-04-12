const fetch = require("node-fetch");


async function getCoordinates(req,res) {
  // fetch data from Geonames API
  const response = await fetch(`http://api.geonames.org/searchJSON?q=${req.body.destination}&maxRows=1&username=deji_abiola`)

  try {
    const data = await response.json();
    res.send(data);
  } catch(error) {
    console.log({"error": error});
  }
};

async function getWeather(req, res) {
  // Fetch data from the Weatherbits API
  const apiKey = process.env.WEATHER_API_KEY
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${apiKey}`)
 

  try {
    const data = await response.json();
    res.send(data);
  } catch(error) {
    console.log(error);
  }
}

async function getImage(req, res) {
  const city = req.body.destination.replace(/\s/g, '+');
  const apiKey = process.env.IMAGE_API_KEY

  // fetch data from the Pixabay API passing in the destination city
  let response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${city}&image_type=photo`);
  try {
    let data = await response.json();
    if (data.totalHits > 0) {
      res.send(data);
    } else {
      // Fetch data passing in the destination country if city doesn't return a result
      const country = req.body.country.replace(/\s/g, '+');
      let response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${country}&image_type=photo`);
      try {
        let data = await response.json();
        if (data.totalHits > 0) {
          res.send(data);
        } else {
          res.send({"use_placeholder": true})
        }
      } catch(error) {
        console.log(error)
      }
    }  
  } catch(error) {
    console.log(error);
  }
}

async function getCountryDetail(req, res) {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${req.body.countryCode}?fullText=true`);

  try {
    const data = await response.json();
    res.send(data);
  } catch(error) {
    console.log(error);
  }
}



exports.getCoordinates = getCoordinates;
exports.getWeather = getWeather;
exports.getImage = getImage;
exports.getCountryDetail = getCountryDetail;