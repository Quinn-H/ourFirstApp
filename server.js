var express = require('express')

var app = express()

var routes = require('./routes')

module.export = app

app.get('/', routes.getName)
