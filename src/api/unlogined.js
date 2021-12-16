import axios from 'axios';

const unlogined = axios.create({});

logined.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default unlogined;
