// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  let petList = [];

  axios.get('http://localhost:3000/pets/')
    .then((response) => {
      // console.log(pets.data[0].id);
      const pets = response.data;
      for (let pet of pets) {
        let petInfo = {};

        petInfo['id'] = pet.id;
        petInfo['name'] = pet.name;

        petList.push(petInfo);
      }

      setResult(petList);
    })
    .catch((error) => {
      setError(`There was an ${error} with the API.`);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
    
  }

  // Fill out as part of Wave 2.
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  }

  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
