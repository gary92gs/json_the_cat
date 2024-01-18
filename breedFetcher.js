const request = require('request');

const apiURL = 'https://api.thecatapi.com/v1/breeds/';
const targetBreed = process.argv[2].toLowerCase();
const queryURL = `${apiURL}search?q=${targetBreed.slice(0, 3)}`;

// fetch breed information
request(queryURL, (error, response, body) => {
  if (error) console.error('Error:', error);
  if (body === '[]') console.log('Breed Not Found');
  //parse and print the breed information
  if (body !== '[]') {
    const catObj = JSON.parse(body)[0]; //convert json string to object and grab the 0th element (it is an array of objects)
    console.log(catObj.name);
    console.log(catObj.description); //print the cat's decription
  }

});


