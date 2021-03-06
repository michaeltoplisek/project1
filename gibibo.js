const getFlightInfo = function (iataSrc,iataDes,leaveDate,backDate) {
  //const queryURL = "https://developer.goibibo.com/api/search/?app_id=6f6f5b90&app_key=99f325dd41ae1c6f61ce55285d94e449&format=json&source=ATL&source=RRY&destination=ABI&dateofdeparture=20181013&dateofarrival=20181016&seatingclass=E&adults=1&children=0&infants=0&counter=100"
  //
  //
let iataSourceCode = iataSrc;
let iataDesCode = iataDes;
let depDate = leaveDate;
let returnDate = backDate;


  const queryURL = `https://developer.goibibo.com/api/search/?app_id=6f6f5b90&app_key=99f325dd41ae1c6f61ce55285d94e449&format=json&source=${iataSourceCode}&destination=${iataDesCode}&dateofdeparture=${depDate}&dateofarrival=${returnDate}&seatingclass=E&adults=1&children=0&infants=0&counter=100`


  console.log("getFlightInfo", iataSourceCode, iataDesCode, queryURL);

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (result) {

    // shorten the results
    const shortArray = result.data.onwardflights.slice(0, 5)
    console.log(shortArray);

    // loop through results to get the required information.
    // hash for flight, Airline Name, Origin airport,Departure time,Overall flight duration,Number of stops, destination, secondary flight destination, arrival time of secondary flight, total cost of trip
    // <p>  Total Cost: ${shortArray[i].fare.grossamount} </p>
    for (let i = 0; i < shortArray.length; i++) {
      $('.flightResults').append(`<div class='flightDiv'>
      <p> Flight Code: ${shortArray[i].FlHash} </p>
      <p> Airline Name: ${shortArray[i].airline} </p>
      <p> Flying out of: ${shortArray[i].origin} </p>
      <p> Departure Time: ${shortArray[i].deptime} </p>
      <p> Flight Duration: ${shortArray[i].duration} </p>
      <p> Number of Stops: ${shortArray[i].stops} </p>
      <p> Destination Airport: ${shortArray[i].destination} </p>


      <a href="#" target="_blank"><button class="btn btn-primary">book now</button></a></div>`)
    }

  });


}
