import axios from 'axios';

export const pokemonApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
