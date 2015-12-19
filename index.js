#! /usr/bin/env node

var express = require('express');
var fs = require('fs');

var server = express();

server.use(express.static('.'));

server.use(function(req, res, next) {
  var file = fs.readFileSync('index.html');
  res.set('Content-Type', 'text/html');
  res.send(file);
});

server.listen(4444);
