// import { getCordinates, getWeather, getImage, getCountryDetails } from './api'; 
import { secondsToDhm } from './helpers';
import { addDestination } from './addDestination';
import { getApiData } from './getData';




export const init = function() {
 

  // if (departureDate.type!="date"){ //if browser doesn't support input type="date", load files for jQuery UI Date Picker
  //   document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n')
  //   document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"><\/script>\n')
  //   document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"><\/script>\n') 
  //   const departureCity = document.getElementById('departure_city');
  //   departureCity.datepicker();
  // }
  
  const submitButton = document.getElementById('submit');
  const addButton = document.getElementById('add_button');


  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const departureField = document.getElementById('departure_date');
    const departureDate = departureField.value;
    const depatureCity = document.getElementById('departure_city').value;
    const destination = document.getElementById('arrival_city').value;
    const arrivalDate = document.getElementById('arrival_date').value;

    const newTrip = {
      'location': depatureCity,
      'departure_date': departureDate,
      'destination': destination,
      'arrival_date': arrivalDate
    }

    const todayDate = new Date()
    const departureDateRefact = new Date(departureDate)
    var secondsTodeparture = (departureDateRefact - todayDate) / 1000;
    const daysToGo = secondsToDhm(secondsTodeparture);

    getApiData(newTrip)
    .then(data => console.log(data))
    
    // departureDate.setAttribute('min', )    
  })

  addButton.addEventListener('click', function(event) {
    event.preventDefault();
    addDestination(destinationCity, arrivalDate);
    console.log('destination fix')
  })

}


 









