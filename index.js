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
//var statu = [];

const Delete_data1 = document.getElementById("data1");
const Delete_data2 = document.getElementById("data2");
const Delete_data3 = document.getElementById("data3");
const Delete_showid = document.getElementById("showid");

$(function() {
  $("#submit").click(function() {
    var Search = $("#ID").val();

    if (Search == data1) {
      // console.log("True");

      $.ajax(settings).done(function(data) {
        var testdata = data.response.items.LA085907385CN;

        $("#showid").empty();
        for (var i = 0; i < testdata.length; i++) {
          var id = testdata[i].barcode;
        }
        $("#showid").append(id);

        $("#data1").empty();
        for (var i = 0; i < testdata.length; i++) {
          status_dates.push(testdata[i].status_date);
          var Status_Dates = status_dates[i] + "<br>";
          $("#data1").append(Status_Dates);
        }

        $("#data2").empty();
        for (var i = 0; i < testdata.length; i++) {
          locations.push(testdata[i].location);
          var Locations = locations[i] + "<br>";
          $("#data2").append(Locations);
        }

        $("#data3").empty();
        for (var i = 0; i < testdata.length; i++) {
          status_descriptions.push(testdata[i].status_description);
          var Status_Descriptions = status_descriptions[i] + "<br>";
          $("#data3").append(Status_Descriptions);
        }

        for (var i = 0; i < testdata.length; i++) {
          var statu = testdata[i].status;
          // statu.push(testdata[i].status);
          console.log(statu);

          if (statu == 101 || statu == 102 || statu == 103) {
            $("#Img1").empty();
            var img1 = `
          <div class="col mr-2" >
            <center>
              <img src="img/showdata/pick-up.gif" alt="">
              <h6>รับพัสดุ</h6>
            </center>
          </div> 
          `;
            $("#Img1").append(img1);
          } else if (
            statu == 101 ||
            statu == 102 ||
            statu == 103 && 
            statu == 201 ||
            statu == 202 ||
            statu == 203 ||
            statu == 204 ||
            statu == 205 ||
            statu == 206 ||
            statu == 207
          ) {
            $("#Img1").empty();
            var img2 = `
            <div class="col mr-2" >
            <center>
              <img src="img/showdata/pick-up.gif" alt="">
              <h6>รับพัสดุ</h6>
            </center>
          </div> 
          <div class="disn_line" style="margin-bottom: 90px"></div>

          <div class="col mr-2" style="width: 25;">
            <center>
              <img src="img/showdata/on-progress.gif" alt="">
              <h6>ถ่ายพัสดุขึ้นรถ</h6>
            </center>
          </div>`;
            $("#Img1").append(img2);
          } else if (
            statu == 101 ||
            statu == 102 ||
            statu == 103 && 
            statu == 201 ||
            statu == 202 ||
            statu == 207 ||
            statu == 204 ||
            statu == 205 ||
            statu == 206 ||
            statu == 203 &&
            statu == 301 ||
            statu == 302
          ){
            $("#Img1").empty();
            var img3 = `
            <div class="col mr-2" >
            <center>
              <img src="img/showdata/pick-up.gif" alt="">
              <h6>รับพัสดุ</h6>
            </center>
          </div>
          <div class="disn_line" style="margin-bottom: 90px"></div>

          <div class="col mr-2" style="width: 25;">
            <center>
              <img src="img/showdata/on-progress.gif" alt="">
              <h6>ถ่ายพัสดุขึ้นรถ</h6>
            </center>
          </div>
          <div class="disn_line" style="margin-bottom: 90px"></div>

          <div class="col mr-2">
            <center>
              <img src="img/showdata/on-delivery.gif" alt="">
              <h6>นำจ่ายพัสดุ</h6>
            </center>
          </div>`
          $("#Img1").append(img3);
          }
          else if (
            statu == 101 ||
            statu == 102 ||
            statu == 103 && 
            statu == 201 ||
            statu == 202 ||
            statu == 207 ||
            statu == 204 ||
            statu == 205 ||
            statu == 206 ||
            statu == 203 &&
            statu == 301 ||
            statu == 302 &&
            statu == 401
          ){
            // ไม่สำเร็จ

          }else if (
            statu == 101 ||
            statu == 102 ||
            statu == 103 && 
            statu == 201 ||
            statu == 202 ||
            statu == 207 ||
            statu == 204 ||
            statu == 205 ||
            statu == 206 ||
            statu == 203 &&
            statu == 301 ||
            statu == 302 &&
            statu == 501
          ){
            // สำเร็จ
            $("#Img1").empty();
            var img5 = `
            <div class="col mr-2" >
            <center>
              <img src="img/showdata/pick-up.gif" alt="">
              <h6>รับพัสดุ</h6>
            </center>
          </div>
          <div class="disn_line" style="margin-bottom: 90px"></div>

          <div class="col mr-2" style="width: 25;">
            <center>
              <img src="img/showdata/on-progress.gif" alt="">
              <h6>ถ่ายพัสดุขึ้นรถ</h6>
            </center>
          </div>
          <div class="disn_line" style="margin-bottom: 90px"></div>

          <div class="col mr-2">
            <center>
              <img src="img/showdata/on-delivery.gif" alt="">
              <h6>นำจ่ายพัสดุ</h6>
            </center>
          </div>
          <div class="disn_line" style="margin-bottom: 90px"></div>

          <div class="col mr-2">
            <center>
              <img src="img/suggestion/icon_success.png" alt="" width="125">
              <h6>นำจ่ายสำเร็จ</h6>
            </center>
          </div>`
          $("#Img1").append(img5);

          }else {
            console.log("NOOOOOOO");
          }
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
