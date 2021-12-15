import axios from 'axios';
import { getCookie } from 'components/Shared/Cookies';
import dotenv from 'dotenv';
dotenv.config();

const check = getCookie('refresh_token');

const logined = axios.create({});

logined.defaults.baseURL = process.env.REACT_APP_BASE_URL;

logined.defaults.headers.common['Authorization'] = `Bearer ${check}`;

export const setAccessTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  isTokenOnHeader = true;
};

export default logined;
