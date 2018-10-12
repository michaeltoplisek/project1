
const params = $.param({
    
    "term": "los angeles"


  });
  
  $.ajax({
    url: `https://www.air-port-codes.com/api/v1/multi?${params}`,
    method: "POST",
    headers: {
      "APC-Auth": "59fb789385",
      "APC-Auth-Secret": "775bcf3ef390fd9"
    }
  }).then(function (response) {
    console.log(response);
  });


