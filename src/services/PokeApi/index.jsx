import axios from 'axios';

const getPokemon = (type) => {
  return axios(`https://pokeapi.co/api/v2/type/${type}`);
};

const getPhoto = (url) => {
  return axios(url);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPokemon,
  getPhoto
};
