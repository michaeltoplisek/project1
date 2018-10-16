const findAirport = function (cityName) {
  const params = $.param({
    "term": cityName,
  });
  return $.ajax({
    url: `https://www.air-port-codes.com/api/v1/multi?${params}`,
    method: "POST",
    headers: {
      "APC-Auth": "59fb789385",
      "APC-Auth-Secret": "775bcf3ef390fd9"
    }
  });
}

const findSrcAirport = function (srcCity) {
  const params = $.param({
    "term": srcCity,
  });
  return $.ajax({
    url: `https://www.air-port-codes.com/api/v1/multi?${params}`,
    method: "POST",
    headers: {
      "APC-Auth": "59fb789385",
      "APC-Auth-Secret": "775bcf3ef390fd9"
    }
  });
}
