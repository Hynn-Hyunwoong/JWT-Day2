"use strict";

var express = require('express');

var app = express();

var router = require('./routes');

app.use(express.json());
app.use(router);
app.use(function (error, req, res, next) {
  res.status(500).send(error.message);
});
module.exports = app;