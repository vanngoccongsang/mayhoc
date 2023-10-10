const express = require("express"),
  app = express();
// cài đặt thư viện mongdb

//setting view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

//route for index page
app.get("/", function (req, res) {
  res.render("index", {title:"Trang thống kê"});
});

//route for magic page
app.get("/tk", function (req, res) {
  res.render("thongke", {title:"Trang thống kê"});
});

app.listen(3000, function () {
  console.log("Server is running on port 3000 ");
});


//API
var apiRouterAPITest = require('./services/apitest')(express);
app.use('/api/test', apiRouterAPITest);


