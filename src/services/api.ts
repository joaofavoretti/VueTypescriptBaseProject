import axios from 'axios';

/* Main Api instance. Use to make HTTP requests (POST, GET, HEAD, DELETE) */
const Api = axios.create({
  baseURL: process.env.VUE_APP_API,
});

export default Api;
