# Udacity Front End Nanodegree Capstone Project

# A Travel Booking Site

## Project Description
This project is an app that takes a desired trip location and date from a user and displays the weather and an image of the location using information obtained from external APIs. It also displays some facts about the trip destination like the native language, currency and flag.

Additionally, the number of days until when the trip starts and the trip duration is also computated and displayed. 
Finally, the project makes use of local storage to store the results of a trip search so the user can always come back to it anytime.

The project makes use of tecnologies such as HTML, CSS, SASS, JavaScript, Node.js, Express.js, API, Webpack, Babel, and Jest

## Project Requirements

- Webpack config should contain at least 3 scripts, express server, build and test. Additionally, dev server may be included.
- There should be at least one test for the express server and application javascript.
- The project must have service workers installed.
- All features are usable across modern desktop, tablet, and phone browsers.
- Styling is set up in a logical way. All interactive elements have hover states.
- HTML structure should be indented properly with classes and ID’s that make sense.
- There should be URLS and API Keys for at least 3 APIs, including Geonames, Weatherbit, and Pixabay. You can feel free to use     more than 3 APIs.
- There should be a primary object with placeholder member value pairs.
- There should be a primary function that is exported to index.js.

## Project Suggestions That Were Implemented

- Add end date and display length of trip.
- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Integrate the REST Countries API to pull in data for the country being visited.
- Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
- Incorporate icons into forecast.
- jQuery datepicker() is used in safari because native input type=date is not supported.

## How To Run

- Fork and then clone the repo to your local machine
- Open the project folder in the terminal and run `npm install`

There are two environments on which you can run the app. Here's how each can be run:

### Run In Development

- Run `npm run dev`

### Run In Production

- Run `npm run build`
- Visit `localhost:8080` on your browser

## Testing

Jest is the tool of choice for running tests on the app. To test, run `npm test` in the terminal.

## API 

The project depends on four API's for its functionality

- [Geonames](http://www.geonames.org/export/web-services.html)
- [Weatherbit](https://www.weatherbit.io/account/create)
- [Pixabay](https://pixabay.com/api/docs/)
- [REST Countries](https://restcountries.eu/)


## Offline Capabilities

The app makes use of service worker in production mode to cache static assets in the browser and enable offline funtionality.
Workbox is used to enable this functionality.



