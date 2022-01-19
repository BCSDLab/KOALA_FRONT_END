import axios from 'axios';

const logined = axios.create({});

logined.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const guid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
};

export default logined;
