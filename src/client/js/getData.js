export const getApiData = async function(newTrip) {
  await Promise.all([
    (async() => {
      // Get coordinates for user's destination
    let coordinateResponse = await fetch("http://localhost:8080/getCoordinates", {
      method: 'POST', 
      credentials: 'same-origin', 
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({"destination": newTrip.destination})
    })
    try {
      let data = await coordinateResponse.json();
      newTrip.destinationCode = data.geonames[0].countryCode;
      newTrip.longitude = data.geonames[0].lng;
      newTrip.latitude = data.geonames[0].lat
    } catch(error) {
      console.log(error);
    }
  
    // Get weather condition in destination 
    let weatherResponse = await fetch("http://localhost:8080/getWeather", {
      method: 'POST', 
      credentials: 'same-origin', 
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'longitude': newTrip.longitude,
        'latitude': newTrip.latitude
      })
    })
    try {
      let data = await weatherResponse.json();
      newTrip.temperature = data.data[0].temp;
      newTrip.weather = data.data[0].weather.description;
    } catch(error) {
      console.log(error);
    }
  
  
    // Get image from user destination 
    let imageResponse = await fetch("http://localhost:8080/getImage", {
      method: 'POST', 
      credentials: 'same-origin', 
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'destination': newTrip.destination,
        'country': newTrip.destination
      })
    })
    try {
      let data = await imageResponse.json();
      if (data.use_placeholder) {
        newTrip.imageUrl = '../media/trip-placeholder.jpg'
      } else {
        newTrip.imageUrl = data.hits[0].largeImageURL;
      }
    } catch(error) {
      console.log(error);
    }
  
  
    // Get information about user destination
    let detailResponse = await fetch("http://localhost:8080/getCountryDetail", {
      method: 'POST', 
      credentials: 'same-origin', 
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'countryCode': newTrip.destinationCode
      })
    })
    try {
      let data = await detailResponse.json();
      newTrip.flagUrl = data[0].flag;
      newTrip.languages = data[0].languages[0].name;
      newTrip.population = data[0].population,
      newTrip.currencyName = data[0].currencies[0].name;
      newTrip.currencySymbol = data[0].currencies[0].symbol;
    } catch(error) {
      console.log(error);
    }
    })()
  ])
  return newTrip;
}