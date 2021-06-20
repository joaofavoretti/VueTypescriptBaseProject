import axios, { AxiosInstance } from 'axios';

/* Main Api instance. Use to make HTTP requests (POST, GET, HEAD, DELETE) */
const Api: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    'x-client': process.env.VUE_APP_CLIENT,
    'x-auth': process.env.VUE_APP_AUTH,
  },
});

export default Api;
