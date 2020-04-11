export const getCordinates = async function(city) {
  const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=deji_abiola`)

  try {
    const data = await response.json()
    return data;
  } catch(error) {
    console.log(error)
  }
}


export const getWeather = async function(longitude, latitude) {
  const apiKey = "97fa45f0ac8845fda913300fa3a621fa";

  const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${apiKey}`)
  

  try {
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}


export const getImage = async function(keyWord) {

  keyWord = keyWord.replace(/\s/g, '+');
  const apiKey = "15974213-7f7b59964f686d0838dce312b";

  const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${keyWord}&image_type=photo`);
  try {
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}

export const getCountryDetails = async function(country) {

  const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);

  try {
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}


