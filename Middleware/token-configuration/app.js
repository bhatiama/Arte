/**
 * This file Contains the configuration for the API Token and all the requests
 */



/**
 * port number
 * Enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
 * Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
 * Node's querystring module for all engines.
 * 
 */
const express = require('express'), //Using Express framework for application ease of routing
  port = process.env.PORT || 3000,
  app = express(),
  cookieParser = require('cookie-parser'), //https://www.npmjs.com/package/cookie-parser
  request = require('request'),
  querystring = require('querystring');


app.listen(port, hostname, () => {
  console.log(`Middleware is up on port ${port}`);
})