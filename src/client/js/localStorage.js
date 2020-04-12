
export const saveTripToLocalStorage = function(trip) {
  let tripArray = localStorage.getItem('trips') ? JSON.parse(localStorage.getItem('trips')) : [];
  tripArray.push(trip);
  localStorage.setItem('trips', JSON.stringify(tripArray));
  const data = JSON.parse(localStorage.getItem('trips'));
  return data;
}




export const getTripsFromLocalStorage = function() {
  const data = JSON.parse(localStorage.getItem('trips'));
  if (data) {
    return data;
  } else {
    return undefined;
  }
}

export const checkLocalStorageArray = function() {
  const data = JSON.parse(localStorage.getItem('trips'));
  if (data) {
    return true;
  } else {
    return false;
  }
}