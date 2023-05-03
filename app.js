const express = require('express')
const routes = require('./routes/routes')
const app = express();
require('./config/db').connect();

// Middleware
app.set(express.json())
app.set(express.urlencoded({ extended: true }))


app.use('/', routes)

module.exports = app;