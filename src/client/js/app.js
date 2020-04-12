import { setDateMinimum } from './helpers';
import { addTrip } from './addDestination';
import { getApiData } from './getData';
import { validateForm } from './formValidation';




export const init = function() {

    setDateMinimum();

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

    const newTrip = validateForm();

    if (!newTrip) {
      return false;
    }

    getApiData(newTrip)
    .then(data => console.log(data))
    
    
  })

  
  addButton.addEventListener('click', addTrip)
}