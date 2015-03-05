console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://www.coderdojochi.org/';
page.open(url, function (status) {
  console.log("Status: " + status);

  if(status === "success") {
    page.render('example.png');
  }

  phantom.exit();
});

