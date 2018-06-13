"use strict";
//server.js
var port = 9000;
var server_sockets = require('./server_sockets');
var http = require('http');

//var express = require('express');
//var app = express();
//var server = http.createServer(app);

var server = http.createServer().listen(port);

server.setTimeout(0);
console.log('The magic happens on port ' + port);

server_sockets(server, "");