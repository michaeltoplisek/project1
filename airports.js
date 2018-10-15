const findAirport = function (eventCity) {
  const params = $.param({
    "term": eventCity
  });

  $.ajax({
    url: `https://www.air-port-codes.com/api/v1/multi?${params}`,
    method: "POST",
    headers: {
      "APC-Auth": "59fb789385",
      "APC-Auth-Secret": "775bcf3ef390fd9"
    }
  }).then(function (response) {
    let iataSrc = response.airports[0].iata;
    console.log(response.airports[0].iata);
    getFlightInfo(iataSrc,'LAX','20181017', '20181030')
  });
}
