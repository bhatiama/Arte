/**
 * This acts as an authorization middleware  where the api will grant 
 * authorization for the user (using the token in the token-configuration/app.js)
 * needs client id and the secret key from the spotify api now
 */

var request = require('request');


/**
 * Obtained an id and secret key from spotify developers account
 * 
 */
let clientId ='8173fa018b554d1c8d306e92da2c364b'; 
let clientSecret = '06356f82e3334a85b8b520aca5c57d6f';

// app request for Auth
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
