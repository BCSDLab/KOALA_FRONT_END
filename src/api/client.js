import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://api.stage.koala.im/';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
