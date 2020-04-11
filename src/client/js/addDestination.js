export const addTrip = function(event) {
  event.preventDefault();

  document.getElementById('departure_city').value = new_location;
  document.getElementById('departure_date').value = new_departure_date;
  document.getElementById('arrival_city').value = "";
  document.getElementById('arrival_date').value = "";

  console.log('fixed');
}