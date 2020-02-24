const { makeRequest } = require('../functions-utils');

exports.handler = function(event, context, callback) {
  // console.log(JSON.parse(event.body));
  makeRequest(callback, 'GET');

};
