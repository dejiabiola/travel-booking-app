import { scrollToSection, removeLoadingLogo, capitalize, lowerCase } from "./helpers";

export const populateUi = function(tripArray) {
  removeLoadingLogo();
  // Get the result section, create a trip card and then append to the result section
  const resultSection = document.getElementById('result_section');
  
  for (let trip = 0; trip < tripArray.length; trip++) {
    let tripCard = document.createElement('div');
    tripCard.setAttribute('class', 'trip_card');

    tripCard.innerHTML = `
    <img src=${tripArray[trip].imageUrl} alt=${tripArray[trip].destination} class="trip_image">
    <div class="trip_data">
      <div class="trip_summary">
        <h3>Trip Summary</h3>
        <div class="trip_destination">
          <img src="../media/aircraft.svg" alt="destination logo" class= "svg">
          <p>From ${capitalize(tripArray[trip].location)} to ${capitalize(tripArray[trip].destination)}/${capitalize(tripArray[trip].countryName)}</p>
        </div>
        <hr>
        <div class="trip_time_outer">
          <img src="../media/time.svg" alt="time logo" class= "svg">
          <div class="time_inner">
            <p><strong>Take-off date:</strong> ${tripArray[trip].departureDate}</p>
            <p><strong>Return date:</strong> ${tripArray[trip].arrivalDate}</p>
          </div>
        </div>
        <hr>
        <div class="trip_days_container">
          <img src="../media/calendar.svg" alt="calendar logo" class="svg">
          <div class="trip_days">
            <p>Your trip starts ${tripArray[trip].daysToGo !== "today" ? "in" : ""} ${tripArray[trip].daysToGo}</p>
            <p>You will be spending ${tripArray[trip].daysOfTrip} in ${capitalize(tripArray[trip].destination)}</p>
          </div>
        </div>
        <hr>
        <div class="weather_forecast">
          <img src="../media/sun.svg" alt="weather logo" class= "svg">
          <p>Expected weather condition is ${tripArray[trip].temperature}<span>&#8451</span>, with ${lowerCase(tripArray[trip].weather)}</p>
        </div>
      </div>
      <hr>
      <div class="fun_facts">
        <h4 class="facts">Things to Note for Your Trip:</h4>
        <ol>
          <li>&#9679<span class="list-item">${capitalize(tripArray[trip].destination)} is located in ${capitalize(tripArray[trip].countryName)}</span></li>
          <li>&#9679<span class="list-item">The primary language of ${capitalize(tripArray[trip].countryName)} is ${tripArray[trip].languages}</span></li>
          <li>&#9679<span class="list-item">Their national flag is <span><img src=${tripArray[trip].flagUrl} alt="flag logo" class= "svg"></span></span></li>
          <li>&#9679<span class="list-item">The currency spent there is the ${tripArray[trip].currencyName}(${tripArray[trip].currencySymbol})</span></li>
        </ol>
      </div>    
    </div>
    `
    const footer = document.getElementById('footer');
    footer.classList.add('position');
    resultSection.appendChild(tripCard);
    scrollToSection('footer');
  }
  

}