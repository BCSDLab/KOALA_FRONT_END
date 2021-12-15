import axios from 'axios';
import { getCookie } from 'components/Shared/Cookies';

require('dotenv').config();

const check = getCookie('refresh_token');

const logined = axios.create({});
logined.defaults.baseURL = 'https://api.stage.koala.im/';

logined.defaults.headers.common['Authorization'] = `Bearer ${check}`;

export const setAccessTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  isTokenOnHeader = true;
};

export default logined;
