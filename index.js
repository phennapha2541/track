var token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IkF1dGhvcml6YXRpb24iLCJleHAiOjE1NzkyNTI1NDcsInJvbCI6WyJST0xFX1VTRVIiXSwiZCpzaWciOnsicCI6InpXNzB4IiwicyI6bnVsbCwidSI6IjFmYmIxNjNlZDI2MThmZWU2Y2E2YTA1YmYxNjhjZDJhIiwiZiI6InhzeiM5In19.PkFhLNX2_Vmt6ddOI8Xl562-WrE_0x-zUTXyrmBVLxKgTfUjtz9xDAek6Xjrn4CnCvnrcltwpsbqPUT9S5ecwA";
var data1 = "LA085907385CN";
// var data2 = "EI486458074TH";
// var data3 = "RP488749199TH";

$(function() {
  $("#submit").click(function() {
      
    var settings = {
      url: "https://trackapi.thailandpost.co.th/post/api/v1/track",
      method: "POST",
      timeout: 0,
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        status: "all",
        language: "TH",
        barcode: [data1]
      })
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  });
});
