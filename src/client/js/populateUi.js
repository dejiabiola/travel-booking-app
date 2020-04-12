import { prepareResultSection } from './helpers';



export const populateUi = function(trip) {
  const resultSection = document.getElementById('result_section');
  
  const tripCard = document.createElement('div');
  tripCard.setAttribute('id', 'trip_card');

  tripCard.innerHTML = `
  <img src=${trip.imageUrl} alt=${trip.destination} class="trip_image">
  <div class="trip_summary">
    <div class="trip_destination">
      <img src="../media/aircraft.svg" alt="destination logo" class= "svg">
      <p>${trip.location} to ${trip.destination}/${trip.countryName}</p>
    </div>
    <hr>
    <div class="trip_time_outer">
      <img src="../media/time.svg" alt="time logo" class= "svg">
      <div class="time_inner">
        <p><strong>Take-off date:</strong> ${trip.departureDate}</p>
        <p><strong>Return date:</strong> ${trip.arrivalDate}</p>
      </div>
    </div>
    <hr>
    <div class="trip_days_container">
      <img src="../media/calendar.svg" alt="calendar logo" class="svg">
      <div class="trip_days">
        <p>Your trip starts in ${trip.daysToGo}</p>
        <p>You will be spending ${trip.daysOfTrip} in ${trip.destination}</p>
      </div>
    </div>
    <hr>
    <div class="weather_forecast">
      <img src="../media/sun.svg" alt="weather logo" class= "svg">
      <p>${trip.temperature}<span>&#8451</span>, with ${trip.weather} expected</p>
    </div>
  </div>
  <hr>
  <div class="fun_facts">
    <h4 class="facts">Did you know:</h4>
    <ol>
      <li>The capital of ${trip.destination} is ${trip.countryName}</li>
      <li>The primary language of ${trip.countryName} is ${trip.languages}</li>
      <li>Their national flag is <span><img src=${trip.flagUrl} alt="flag logo" class= "svg"></span></li>
      <li>The currency spent there is the ${trip.currencyName}(${trip.currencySymbol})</li>
    </ol>
  </div>
  <hr>
  <div class="interactive_buttons">
    <button class="save_trip">Save Details</button>
    <button class="add_trip">Add Destination</button>
  </div>
  
  `

  resultSection.appendChild(tripCard);

}