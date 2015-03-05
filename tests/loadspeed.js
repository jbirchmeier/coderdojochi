var page = require('webpage').create();
var system = require('system');

var url = 'http://coderdojochi.org';

var t = Date.now();
page.open(url, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the url');
  } else {
    t = Date.now() - t;
    console.log('Loading ' + url);
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});
