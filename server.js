var http = require('http');
//var dt = require('./js/datemodule.js');
var url = require('url');
var fs = require('fs'); 
var events = require('events');
var eventEmitter = new events.EventEmitter(); 

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  
  //Assign the event handler to an event:
  eventEmitter.on('scream', myEventHandler);
  
  
http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("The date and time are currently: " + dt.myDateTime());
    
    // res.write("<br><br>");

    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;

    // res.write(txt);

    //Fire the 'scream' event:
    eventEmitter.emit('scream');

  
    if(req.url.indexOf('index.html') > 0) {
        fs.readFile('./public/index.html', function(err, data) {



            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });
    
    }
    else if(req.url.indexOf('cd_catalog.xml') > 0) {

        fs.readFile('./public/cd_catalog.xml', function(err, data) {



            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });
        
    }

      

    //res.end();
}).listen(8080); 