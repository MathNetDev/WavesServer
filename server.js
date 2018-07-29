"use strict";

// Grab arguments given
var args = process.argv.slice(2);

var port = 8885;

// If we have an argument, use that as the port instead
// 8889 for live
// 8888 for test
// 8887 for dev
// 8885 for waves

if(args[0]){
    port = args[0];
}

var server_sockets = require('./server_sockets');
var http = require('http');

//var express = require('express');
//var app = express();
//var server = http.createServer(app);

var server = http.createServer().listen(port);

server.setTimeout(0);
console.log('The magic happens on port ' + port);

server_sockets(server, "");
