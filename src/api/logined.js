import axios from 'axios';
import { getCookie } from 'components/Shared/Cookies';

const check = getCookie('refresh_token');
console.log(check);

const logined = axios.create({});

logined.defaults.baseURL = 'https://api.stage.koala.im/';

logined.defaults.headers.common['Authorization'] = `Bearer ${check}`;

export default logined;
