import axios from 'axios';
import { getCookie } from 'components/Shared/Cookies';

const check = getCookie('refresh_token');

const logined = axios.create({});

logined.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setRefreshOnHeader = () => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${check}`;
};

export const setAccessTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default logined;
