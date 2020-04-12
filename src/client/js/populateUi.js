
export const populateUi = function(trip) {
  const resultSection = document.getElementById('result_section');
  
  const tripCard = document.createElement('div');
  tripCard.setAttribute('id', 'trip_card');

  tripCard.innerHTML = `
  <img src=${trip.imageUrl} alt=${trip.destination} class="trip_image">
  <div class="trip_data">
    <div class="trip_summary">
      <h3>Trip Summary</h3>
      <div class="trip_destination">
        <img src="../media/aircraft.svg" alt="destination logo" class= "svg">
        <p>From ${trip.location} to ${trip.destination}/${trip.countryName}</p>
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
          <p>Your trip starts ${trip.daysToGo !== "today" ? "in" : ""} ${trip.daysToGo}</p>
          <p>You will be spending ${trip.daysOfTrip} in ${trip.destination}</p>
        </div>
      </div>
      <hr>
      <div class="weather_forecast">
        <img src="../media/sun.svg" alt="weather logo" class= "svg">
        <p>Expected weather condition is ${trip.temperature}<span>&#8451</span>, with ${trip.weather}</p>
      </div>
    </div>
    <hr>
    <div class="fun_facts">
      <h4 class="facts">Do You Know:</h4>
      <ol>
        <li>&#9679<span class="list-item">The capital of ${trip.destination} is ${trip.countryName}</span></li>
        <li>&#9679<span class="list-item">The primary language of ${trip.countryName} is ${trip.languages}</span></li>
        <li>&#9679<span class="list-item">Their national flag is <span><img src=${trip.flagUrl} alt="flag logo" class= "svg"></span></span></li>
        <li>&#9679<span class="list-item">The currency spent there is the ${trip.currencyName}(${trip.currencySymbol})</span></li>
      </ol>
    </div>
    <hr>
    <div class="interactive_buttons">
      <button class="save_trip trip-button">Save Details</button>
      <button class="add_trip trip-button">Add New Destination</button>
    </div>
  </div>
  `
  const footer = document.getElementById('footer');
  footer.classList.add('position');
  resultSection.appendChild(tripCard);

}