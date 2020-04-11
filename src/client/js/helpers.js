export const secondsToDhm = function(seconds) {
  seconds = Number(seconds);
  const day = Math.floor(seconds / (3600*24));
  const hour = Math.floor(seconds % (3600*24) / 3600);
  const minute = Math.floor(seconds % 3600 / 60);
  const second = Math.floor(seconds % 60);
  
  const dayDisplay = day + " days";
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

