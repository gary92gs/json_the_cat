const request = require('request');

// fetch breed information
const fetchBreedDecription = (breed, cb) => {
  const qURL = `https://api.thecatapi.com/v1/breeds/search?q=${breed.slice(0,3).toLowerCase()}`;
  request(qURL, (error, response, body) => {
    let description = null;
    if (body !== '[]') {
      description = JSON.parse(body)[0].description; //convert json string to object and grab the 0th element (it is an array of objects)
    }
    cb(error, description);
  });
};



module.exports = fetchBreedDecription;