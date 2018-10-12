const queryURL="https://developer.goibibo.com/api/search/?app_id=6f6f5b90&app_key=99f325dd41ae1c6f61ce55285d94e449&format=json&source=ATL&destination=ABI&dateofdeparture=20181031&dateofarrival=20181202&seatingclass=E&adults=1&children=0&infants=0&counter=100"
//
// "https://developer.goibibo.com/api/search/?app_id=6f6f5b90&app_key=${APIKey}&format=json&source=${departureCity}&destination=${destinationCity}&dateofdeparture=${departureDate}&dateofarrival=${arrivalDate}&seatingclass=E&adults=1&children=0&infants=0&counter=100"



$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function(result) {
console.log(result);

});
