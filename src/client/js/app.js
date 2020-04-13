import { setDateMinimum, prepareResultSection, clearErrorSection } from './helpers';
import { getApiData } from './getData';
import { validateForm } from './formValidation';
import { populateUi } from './populateUi';
import { saveTripToLocalStorage, getTripsFromLocalStorage } from './localStorage';




export const init = function() {

    // Set the min attribute in the input date field dynamically
    setDateMinimum();

    // Give user the results from local storage
    const savedTripsArray = getTripsFromLocalStorage();
    if (savedTripsArray) {
      prepareResultSection();
      populateUi(savedTripsArray);
    }
  

  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Clear all errors on error section
    clearErrorSection();

    // Validate the form field, put the input values into an object and assign to newTrip
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
      // Save the new object into the local storage
      const userArray = saveTripToLocalStorage(data);

      // Display new trip to user
      populateUi(userArray);
    }) 
  })
}