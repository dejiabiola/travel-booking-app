import { setDateMinimum, prepareResultSection } from './helpers';
import { getApiData } from './getData';
import { validateForm } from './formValidation';
import { populateUi } from './populateUi';
import { saveTripToLocalStorage, getTripsFromLocalStorage } from './localStorage';




export const init = function() {

    // Set the min attribute in the input date field dynamically
    setDateMinimum();

    const savedTripsArray = getTripsFromLocalStorage();
    if (savedTripsArray) {
      prepareResultSection();
      populateUi(savedTripsArray);
    }

  // if (departureDate.type!="date"){ //if browser doesn't support input type="date", load files for jQuery UI Date Picker
  //   document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n')
  //   document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"><\/script>\n')
  //   document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"><\/script>\n') 
  //   const departureCity = document.getElementById('departure_city');
  //   departureCity.datepicker();
  // }

  
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Validate the form field, populate the input values into an object and assign to newTrip
    const newTrip = validateForm();

    // If error, stop the code and return
    if (!newTrip) {
      return false;
    }

    // get data from all api and populate the object
    getApiData(newTrip)
    .then(data => {
      if (data.error) {
        return;
      }
      const userArray = saveTripToLocalStorage(data);
      populateUi(userArray);
    }) 
  })

}