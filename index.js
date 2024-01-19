const fetchBreedDecription = require('./breedFetcher');

const targetBreed = process.argv[2].toLowerCase();

fetchBreedDecription(targetBreed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});