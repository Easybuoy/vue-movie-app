const { makeRequest, headers } = require('../functions-utils');

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    // To enable CORS
    return callback(null, {
      statusCode: 200,
      headers,
      body: 'This was not a POST request!'
    });
  }
  
  makeRequest(callback, 'tv', 'GET', event.body);
};
