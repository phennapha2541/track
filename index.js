var token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IkF1dGhvcml6YXRpb24iLCJleHAiOjE1NzkyNTI1NDcsInJvbCI6WyJST0xFX1VTRVIiXSwiZCpzaWciOnsicCI6InpXNzB4IiwicyI6bnVsbCwidSI6IjFmYmIxNjNlZDI2MThmZWU2Y2E2YTA1YmYxNjhjZDJhIiwiZiI6InhzeiM5In19.PkFhLNX2_Vmt6ddOI8Xl562-WrE_0x-zUTXyrmBVLxKgTfUjtz9xDAek6Xjrn4CnCvnrcltwpsbqPUT9S5ecwA";

var data1 = "LA085907385CN";
// var data2 = "EI486458074TH";
// var data3 = "RP488749199TH";

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

var status_dates = [];
var locations = [];
var status_descriptions = [];
var signatures = [];

const Delete_data1 = document.getElementById("data1");
const Delete_data2 = document.getElementById("data2");
const Delete_data3 = document.getElementById("data3");
const Delete_showid = document.getElementById("showid");

$(function() {
  $("#submit").click(function() {
    var Search = $("#ID").val();

    if (Search == data1) {
      console.log("True");

      $.ajax(settings).done(function(data) {
        var testdata = data.response.items.LA085907385CN;
        for (var i = 0; i < testdata.length; i++) {
          status_dates.push(testdata[i].status_date);
          locations.push(testdata[i].location);
          status_descriptions.push(testdata[i].status_description);
          signatures.push(testdata[i].signature);
        }

        $("#showid").empty();
        for (var i = 0; i < testdata.length; i++) {
          var id = testdata[i].barcode;
        }
        $("#showid").append(id);

        $("#data1").empty();
        for (var i = 0; i < status_dates.length; i++) {
          var Status_Dates = status_dates[i] + "<br>";
          $("#data1").append(Status_Dates);
        }

        $("#data2").empty();
        for (var i = 0; i < locations.length; i++) {
          var Locations = locations[i] + "<br>";
          $("#data2").append(Locations);
        }

        $("#data3").empty();
        for (var i = 0; i < status_descriptions.length; i++) {
          var Status_Descriptions = status_descriptions[i] + "<br>";
          $("#data3").append(Status_Descriptions);
        }
      });
    }

    if (Search != data1) {
      Delete_data1.innerHTML = "";
      Delete_data2.innerHTML = "";
      Delete_data3.innerHTML = "";
      Delete_showid.innerHTML = "";
    }

    if (Search == "") {
      alert("กรุณกรอกเลขพัสดุที่คุณต้องการหา");
    }
  });
});
