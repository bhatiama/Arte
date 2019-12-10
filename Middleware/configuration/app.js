/**
 * This acts as an authorization middleware  where the api will grant 
 * authorization for the user (using the token in the token-configuration/app.js)
 * needs client id and the secret key from the spotify api now
 */

var request = require('request');