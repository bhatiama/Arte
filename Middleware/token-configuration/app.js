/**
 * This file Contains the configuration for the API Token and all the requests
 */

const express = require('express'), //Using Express framework for application ease of routing
      port = process.env.PORT || 3000,
      app = express();


app.listen(port, hostname, ()=>{
  console.log(`Middleware is up on port ${port}`);
})