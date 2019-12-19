var token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IkF1dGhvcml6YXRpb24iLCJleHAiOjE1NzkyNTI1NDcsInJvbCI6WyJST0xFX1VTRVIiXSwiZCpzaWciOnsicCI6InpXNzB4IiwicyI6bnVsbCwidSI6IjFmYmIxNjNlZDI2MThmZWU2Y2E2YTA1YmYxNjhjZDJhIiwiZiI6InhzeiM5In19.PkFhLNX2_Vmt6ddOI8Xl562-WrE_0x-zUTXyrmBVLxKgTfUjtz9xDAek6Xjrn4CnCvnrcltwpsbqPUT9S5ecwA";

var data1 = "LA085907385CN";
var data2 = "EI486458074TH";

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
    barcode: [data1,data2]
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
const Delete_img = document.getElementById("Img1");


$(function() {
  $("#submit").click(function() {
    var Search = $("#ID").val();
    var statu;

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
          var str = testdata[i].status;
          console.log(str);

          statu = str.charAt(0);
          console.log("char: " + statu);

          if (statu == 1) {
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
          }
          if (statu == 2) {
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
          }
          if (statu == 3) {
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
          </div>`;
            $("#Img1").append(img3);
          }
          if (statu == 4) {
            // ไม่สำเร็จ
            $("#Img1").empty();
            var img4 = `
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
              <img src="img/suggestion/icon_unsuccess.png" alt="" width="125">
              <h6>นำจ่ายไม่สำเร็จ</h6>
            </center>
          </div>`;
            $("#Img1").append(img4);
          }
          if (statu == 5) {
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
          </div>`;
            $("#Img1").append(img5);
          } else {
            console.log("NOOOOOOO");
          }
        }
      });
    }
    if (Search == data2) {
      // console.log("True");

      $.ajax(settings).done(function(data) {
        var testdata = data.response.items.EI486458074TH;

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
          var str = testdata[i].status;
          console.log(str);

          statu = str.charAt(0);
          console.log("char: " + statu);

          if (statu == 1) {
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
          }
          if (statu == 2) {
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
          }
          if (statu == 3) {
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
          </div>`;
            $("#Img1").append(img3);
          }
          if (statu == 4) {
            // ไม่สำเร็จ
            $("#Img1").empty();
            var img4 = `
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
              <img src="img/suggestion/icon_unsuccess.png" alt="" width="125">
              <h6>นำจ่ายไม่สำเร็จ</h6>
            </center>
          </div>`;
            $("#Img1").append(img4);
          }
          if (statu == 5) {
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
          </div>`;
            $("#Img1").append(img5);
          } else {
            console.log("NOOOOOOO");
          }
        }
      });
    }
    if (Search != data1 && Search != data2) {
      Delete_data1.innerHTML = "";
      Delete_data2.innerHTML = "";
      Delete_data3.innerHTML = "";
      Delete_showid.innerHTML = "";
      Delete_img.innerHTML = "";
      alert("ไม่มีเลขพัสดุที่ท่านกำลังตามหา");
    }
    if (Search == "") {
      alert("กรุณกรอกเลขพัสดุที่คุณต้องการหา");
    }
  });
});
