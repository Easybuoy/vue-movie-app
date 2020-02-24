const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { IMDB_API_KEY } = process.env;
export const sendSuccessResponse = (body, status, callback) => {
  callback(null, {
    statusCode: status,
    body: JSON.stringify(body)
  });
};

export const makeRequest = (callback, method, payload = null) => {
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${IMDB_API_KEY}`;
  let options = {
    method,
    url: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  if (payload) { 
    options.data = JSON.stringify(payload);
  }
  
  axios(options)
    .then(res => sendSuccessResponse(res.data, res.status, callback))
    .catch(err => sendSuccessResponse(err, err.response.status, callback));
};
