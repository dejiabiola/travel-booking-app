import { checkLocalStorageArray } from "./localStorage";

export const secondsToDhm = function(seconds) {
  // Convert seconds to days, hours and minutes
  seconds = Number(seconds);
  const day = Math.floor(seconds / (3600*24));
  const hour = Math.floor(seconds % (3600*24) / 3600);
  const minute = Math.floor(seconds % 3600 / 60);
  const second = Math.floor(seconds % 60);
  
  const dayDisplay = (day + 1) + " days";
  const hourDisplay = hour > 0 ? hour + (hour == 1 ? " hour, " : " hours, ") : "";
  const minuteDisplay = minute > 0 ? minute + (minute == 1 ? " minute" : " minutes") : "";
  
  if (day > 0) {
    return dayDisplay;
  } else if (minute > 0) {
    return hourDisplay + minuteDisplay
  } else {
    return "today"
  }
}

export const isFutureDate = function(date) {
  return Math.ceil((new Date(date) - Date.now()) / (1000 * 60 * 60 * 24)) >= 0;
}

export const isDateAfterThatDate = function (pastDate, futureDate) {
  return Math.ceil((new Date(futureDate) - new Date(pastDate)) / (1000 * 60 * 60 * 24)) > 0;
}

export const scrollToSection = function(sectionId) {
  document.getElementById(sectionId).scrollIntoView(false, {  
    behavior: 'smooth',   
  });
}

export const showErrorMessage = function(msg) {
  const errMsgBlock = document.getElementById('error-block');
  if (msg) {
    errMsgBlock.innerHTML = msg;
    errMsgBlock.classList.add('active');
  } else {
    errMsgBlock.classList.add('in-active');
  } 
}

export const setDateMinimum = function() {
  const departureDate = document.getElementById('departure_date');
  const arrivalDate = document.getElementById('arrival_date');

  const date = new Date();
  const year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  departureDate.setAttribute('min', year + "-" + month + "-" + day);
  arrivalDate.setAttribute('min', year + "-" + month + "-" + day);
}
  
export const daysToTravel = function(newTrip) {

  const todayDate = new Date()
  const departureDateRefact = new Date(newTrip.departureDate)
  const secondsTodeparture = (departureDateRefact - todayDate) / 1000;
  const daysToGo = secondsToDhm(secondsTodeparture);
  newTrip.daysToGo = daysToGo;
  return newTrip
} 

export const tripDaysDifference = function(newTrip) {
  const departureDateRefact = new Date(newTrip.departureDate);
  const returnDateRefact = new Date(newTrip.arrivalDate);
  console.log("depart", departureDateRefact);
  console.log("arrive", returnDateRefact)
  const secondsDifference = (returnDateRefact - departureDateRefact) / 1000;
  console.log("seconds", secondsDifference)
  const daysOfTrip = secondsToDhm(secondsDifference);
  newTrip.daysOfTrip = daysOfTrip
  return newTrip;
}

export const prepareResultSection = function() {
  const resultSection = document.getElementById('result_section');
  resultSection.classList.remove('display-hide');
  resultSection.classList.add('prepare-section');
  scrollToSection('footer');
}

export const destroyResultSection = function() {
  const resultSection = document.getElementById('result_section');
  resultSection.classList.remove('display-hide');
  resultSection.classList.remove('prepare-section');
}

export const formatDate = function(date) {
  const datefield=document.createElement("input")
  datefield.setAttribute("type", "date")
  if (datefield.type!="date"){ //if browser doesn't support input type="date", load files for jQuery UI Date Picker
    let dateArray = date.split("/");
    return `${dateArray[1]} ${getMonth(dateArray[0])}, ${dateArray[2]}`; 
  }
  let dateArray = date.split("-");

  return `${dateArray[2]} ${getMonth(dateArray[1])}, ${dateArray[0]}`;

}

function getMonth(month) {
  const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthArray[month - 1];
}

export const apiError = function(error) {
  if (!checkLocalStorageArray()) {
    destroyResultSection();
  }
  showErrorMessage(error);
  scrollToSection('body_section')
}

export const addLoadingLogo = function() {
  document.getElementById('loading_logo').classList.remove('toggle_logo');
}

export const removeLoadingLogo = function() {
  document.getElementById('loading_logo').classList.add('toggle_logo');
}

export const clearResultSection = function() {
  document.getElementById('result_section').innerHTML = "";
}


export const clearErrorSection = function() {
  document.getElementById('error-block').innerHTML = "";
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const lowerCase = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toLowerCase() + s.slice(1);
}
