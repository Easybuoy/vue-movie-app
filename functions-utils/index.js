const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config()

const { IMDB_API_KEY } = process.env;
export const sendSuccessResponse = (body, callback) => {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(body)
    })
}

export const makeRequest = (method, payload=null) => {
    const API_URL =
    `https://api.themoviedb.org/3/movie/550?api_key=${IMDB_API_KEY}`;
    axios
    .get(API_URL)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}