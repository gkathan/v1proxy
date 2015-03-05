var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  
  
  
// Set the client credentials and the OAuth2 server
var credentials = {
  clientID: '<client-id>',
  clientSecret: '<client-secret>',
  site: 'https://api.oauth.com'
};

// Initialize the OAuth2 Library
var oauth2 = require('simple-oauth2')(credentials);

// Authorization oauth2 URI
var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
  scope: '<scope>',
  state: '<state>'
});

// Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
res.redirect(authorization_uri);

// Get the access token object (the authorization code is given from the previous step).
var token;
oauth2.authCode.getToken({
  code: '<code>',
  redirect_uri: 'http://localhost:3000/callback'
}, saveToken);

// Save the access token
function saveToken(error, result) {
  if (error) { console.log('Access Token Error', error.message); }
  token = oauth2.accessToken.create(result);
}



  
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
