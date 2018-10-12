const findEvent = function (event) {
    event.preventDefault()

    $('#concert-dump').empty();
    const keyword = $('#keyword-input').val();
    const startDate = $('#start-input').val();
    const endDate = $('#end-input').val();
    const city = $('#city-input').val();
    const state = $('#state-input').val();

    queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=epTJybwaqGagagV0AixUnakzqCbT5q0I&keyword=${keyword}&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:00:00Z&city=${city}&countryCode=US&stateCode=${state}`

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);

        for (let i = 0; i < response._embedded.events.length; i++) {
            $('#concert-dump').append(`<p>${response._embedded.events[i].name}</p>
    <p>${response._embedded.events[i].dates.start.localDate}</p>
    <p>${response._embedded.events[i]._embedded.venues[0].city.name}</p>
    <p>${response._embedded.events[i]._embedded.venues[0].state.stateCode}</p>`);


        }

    });
}
$('#add-info').on('click', findEvent);