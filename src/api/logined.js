import axios from 'axios';

const logined = axios.create({});

logined.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

export default logined;
