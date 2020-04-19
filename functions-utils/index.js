const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { IMDB_API_KEY } = process.env;
export const sendSuccessResponse = (body, status, callback) => {
  callback(null, {
    statusCode: status,
    body: JSON.stringify(body),
    headers,
  });
};

export const makeRequest = (callback, url, method, payload = null) => {
  let API_URL = `https://api.themoviedb.org/3/${url}?api_key=${IMDB_API_KEY}`;

  let options = {
    method,
    url: API_URL,
    headers,
  };

  if (payload) {
    const parsedPayload = JSON.parse(payload);
    if (parsedPayload) {
      if (parsedPayload.page) {
        options.url = `https://api.themoviedb.org/3/${url}?api_key=${IMDB_API_KEY}&page=${parsedPayload.page}`;
      }

      if (parsedPayload.id) {
        options.url = `https://api.themoviedb.org/3/${url}/${parsedPayload.id}?api_key=${IMDB_API_KEY}`;
      }

      if (parsedPayload.id && parsedPayload.path) {
        options.url = `https://api.themoviedb.org/3/${url}/${parsedPayload.id}/${parsedPayload.path}?api_key=${IMDB_API_KEY}`;
      }

      if (parsedPayload.id && parsedPayload.path && parsedPayload.page) {
        options.url = `https://api.themoviedb.org/3/${url}/${parsedPayload.id}/${parsedPayload.path}?api_key=${IMDB_API_KEY}&page=${parsedPayload.page}`;
      }
    }
  }

  axios(options)
    .then((res) => sendSuccessResponse(res.data, res.status, callback))
    .catch((err) => sendSuccessResponse(err, err.response.status, callback));
};

export const headers = {
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Headers':
  //   'Origin, X-Requested-With, Content-Type, Accept',
  // 'Content-Type': 'application/json'
};
