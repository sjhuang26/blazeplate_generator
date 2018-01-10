const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config')

// // // //

// Express.js App & Configuration
const app = express();

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// print the request log on console
app.use(morgan('dev'));

// set the secret key variable for jwt
// TODO - should this be abstracted elsewhere?
app.set('jwt-secret', config.secret);

// index page, just for testing
// TODO - REMOVE
app.get('/', (req, res) => {
  res.send('Hello JWT');
});

// Boostrap API routes - scopes all routes under /api
app.use('/api', require('./routes'));

// // // //

// Exports Express app
module.exports = app;
