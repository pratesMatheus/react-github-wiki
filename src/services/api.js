import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://api.github.com',
});

/* /repos/pratesMatheus/meu-estudo-no-github */