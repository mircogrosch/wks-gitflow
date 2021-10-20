import axios from 'axios';

// Possible alternative: 'https://swapi.dev/api'
const baseURL = 'https://www.swapi.it/api';
// const baseURL1 = 'https://www.swapi.it/api/people/';

export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);


export const getStarships= (url: string)=>  
  axios.get(url,{baseURL}).then((res) => res.data);

export const getPeople = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);
