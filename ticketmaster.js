let cityName = ""; //'atlanta'
const displayEvents = function (e) {
    e.preventDefault();
    $('#eventDump').empty();
    const APIKey = 'epTJybwaqGagagV0AixUnakzqCbT5q0I';
    const consumerSecret = 'Y4xbmMn0fXD5NzA4';

    cityName = $('#eventCity').val();
    let eventSearchTerm = $('#eventName').val(); //'music'
    let startDate = $('#startDate').val(); //'2018-10-17'
    let endDate = $('#endDate').val(); //'2018-10-29'

    console.log(cityName);

    let queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKey}&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:59:59Z&keyword=${eventSearchTerm}&city=${cityName}&size=5`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {

        try {
            $('#eventResults').empty();
            console.log(response);
            for (let i = 0; i < response._embedded.events.length; i++) {
                $("#eventResults").append(`<div><p>${response._embedded.events[i].name}</p>
            <p>${response._embedded.events[i].dates.start.localDate}</p>
            <p>${response._embedded.events[i]._embedded.venues[0].city.name}</p>
            <p><a target="_blank" href="${response._embedded.events[i].url}">Click here to buy tickets</a></p>
            <p><button class="eventFlight" data-city="${response._embedded.events[i]._embedded.venues[0].city.name}">Find flight Info</button></p></div>`);
                //cityName = response._embedded.events[i]._embedded.venues[0].city.name
                //console.log(cityName)
                const stateCode = response._embedded.events[i]._embedded.venues[0].state.stateCode;
                console.log(stateCode);
            }
            $('.eventFlight').on('click', function () {
                cityName = $(this).attr('data-city');
                console.log(cityName);
                $('#flightResults').append(`Enter leave date: <input id="leaveDate" type='text'/> Enter return date: <input id="returnDate" type="text"/>
                Enter source city: <input type="text" id="srcDes"/><button id="flightSearch">Search them flights</button>`)
                $('#flightSearch').on('click', function () {
                    const leaveDate = $('#leaveDate').val();
                    const returnDate = $('#returnDate').val();
                    const srcCity = $('#srcDes').val();
                    const destAirportReq = findAirport(cityName);
                    const srcAirportReq = findSrcAirport(srcCity);
                    Promise.all([destAirportReq, srcAirportReq]).then(function (responses) {
                        let iataDest = responses[0].airports[0].iata;
                        let iataSrc = responses[1].airports[0].iata;
                        getFlightInfo(iataSrc, iataDest, '20181017', '20181030'); 
                    });
                })
            })
        } catch (error) {
            $('#eventResults').text('No events found');
        }
        //$('#eventFlight').on('click', airportcodeAjaxcall) need to find a way to respond 
        //to the button and grab city name from whicher event is in that div

    })
}

$('#searchButton').on('click', displayEvents)
