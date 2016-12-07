var express = require('express')

var app = express()

var routes = require('./routes')

module.exports = app

app.get('/', routes.getName)
