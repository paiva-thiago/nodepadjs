var express = require('express');
var os = require( 'os' );

var router = express.Router();

var ip= function(){
  var os = require('os');
  var ifaces = os.networkInterfaces();
  
  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;
  
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
  
      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
      }
      ++alias;
    });
  });
  return ifaces;
}


var listaTextos = function(ip){
  
}
/* GET home page. */
router.get('/', function(req, res, next) {
  ip();
  res.render('index', { title: 'NodepadJs - a nodejs crypto markdown editor' });
});

module.exports = router;
