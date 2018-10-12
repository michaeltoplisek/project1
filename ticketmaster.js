const displayEvents = function (e) {
    e.preventDefault()
    const APIKey = 'epTJybwaqGagagV0AixUnakzqCbT5q0I';
    const consumerSecret = 'Y4xbmMn0fXD5NzA4';

    let eventSearchTerm = $('#eventName').val();
    let eventCity = $('#eventCity').val();

    let queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKey}&keyword=${eventSearchTerm}&city=${eventCity}&size=5`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response._embedded.events.length; i++) {
        $("#eventDump").append(`<div>${response._embedded.events[i].name}</div>`)
        console.log(response._embedded.events[i].name)
        }
    })
}

$('#searchButton').on('click', displayEvents)
