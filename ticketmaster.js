const displayEvents = function (e) {
    e.preventDefault();
    $('#eventDump').empty();
    const APIKey = 'epTJybwaqGagagV0AixUnakzqCbT5q0I';
    const consumerSecret = 'Y4xbmMn0fXD5NzA4';

    let eventSearchTerm = 'music'  //$('#eventName').val();
    let eventCity = 'atlanta'  //$('#eventCity').val();
    let startDate = '2018-10-17' //$('#startDate').val();
    let endDate = '2018-10-31' //$('#endDate').val();
    //findAirport(eventCity);

    let queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKey}&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:59:59Z&keyword=${eventSearchTerm}&city=${eventCity}&size=5`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {

        try {
            console.log(response);
            for (let i = 0; i < response._embedded.events.length; i++) {
                $("#eventResults").append(`<div><p>${response._embedded.events[i].name}</p>
            <p>${response._embedded.events[i].dates.start.localDate}</p>
            <p>${response._embedded.events[i]._embedded.venues[0].city.name}</p>
            <p><a target="_blank" href="${response._embedded.events[i].url}">Click here to buy tickets</a></p>
            <p><button id='eventFlight'>Find flight Info</button></p></div>`)
                console.log(response._embedded.events[i].name)
            }
            $('#eventFlight').on('click',findAiport(eventCity))
            console.log(response._embedded.events[0]._embedded.venues[0].city.name)
            console.log(response._embedded.events[0]._embedded.venues[0].state.stateCode)

        } catch (error) {
            $('#eventResults').text('No events found');
        }
        //$('#eventFlight').on('click', airportcodeAjaxcall) need to find a way to respond 
        //to the button and grab city name from whicher event is in that div

    })
}

$('#searchButton').on('click', displayEvents)
