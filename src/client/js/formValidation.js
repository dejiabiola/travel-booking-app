import { isFutureDate, showErrorMessage, isDateAfterThatDate, prepareResultSection, formatDate  } from './helpers';


export const validateForm = function() {
  let errors = '';

  const departureDate = document.getElementById('departure_date');
  const departureCity = document.getElementById('departure_city');
  const destination = document.getElementById('arrival_city');
  const arrivalDate = document.getElementById('arrival_date');

  // check the Current Location field
  if (departureCity.value.length < 3) {

    departureCity.classList.remove('valid');
    departureCity.classList.add('error');

    errors += '<p>Please enter your current location</p>';
  }
  else {
    //validated
    departureCity.classList.remove('error');
    departureCity.classList.add('valid');
  }

  // check the Destination field
  if (destination.value.length < 3) {

    destination.classList.remove('valid');
    destination.classList.add('error');
    
    errors += '<p>Please enter your destination</p>';
    
  }
  else {
    //validated
    destination.classList.remove('error');
    destination.classList.add('valid');
  }

  // check the Start Date field
  if(!isFutureDate(departureDate.value)) {

    departureDate.classList.add('error');
    departureDate.classList.remove('valid');

    errors += `<p>Please select the date of departure</p>`;
    
  } else if (departureDate.value === '') {
    departureDate.classList.add('error');
    departureDate.classList.remove('valid');

    errors += '<p>Please select the date of departure</p>';
  } else {
    //validated
    departureDate.classList.remove('error');
    departureDate.classList.add('valid');
  }

  // Validate the arrival Date field
  if (!isDateAfterThatDate(departureDate.value, arrivalDate.value) || !isFutureDate(arrivalDate.value)){
    arrivalDate.classList.add('error')
    arrivalDate.classList.remove('valid');
    
    errors += '<p>You have entered an invalid return date</p>';    
  } else if (arrivalDate.value == '') {
    arrivalDate.classList.add('error')
    arrivalDate.classList.remove('valid');

    errors += '<p>Please select the date you plan to return</p>';
  } else {
      arrivalDate.classList.remove('error')
      arrivalDate.classList.add('valid');
  }

  showErrorMessage(errors);


  if (!errors) {
    prepareResultSection();

    const formatDepartureDate = formatDate(departureDate.value);
    const formatReturnDate = formatDate(arrivalDate.value);
 
    return {
      location: departureCity.value, 
      destination: destination.value, 
      departureDate: formatDepartureDate, 
      arrivalDate: formatReturnDate
    }
  } else {
    return false;
  }
}