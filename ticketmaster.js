const displayEvents = function (e) {
    e.preventDefault()
    const APIKey = 'epTJybwaqGagagV0AixUnakzqCbT5q0I';
    const consumerSecret = 'Y4xbmMn0fXD5NzA4';

    let eventSearchTerm =  $('#eventName').val();
    let eventCity =   $('#eventCity').val();

    let queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKey}&keyword=${eventSearchTerm}&city=${eventCity}`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
            console.log(response);
            console.log(response._embedded.events[0].name)
            $("#eventDump").append(response._embedded.events[0].name)
        })
}
//displayEvents()
$('#searchButton').on('click', displayEvents)
