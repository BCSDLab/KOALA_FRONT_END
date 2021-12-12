import axios from 'axios';

const unlogined = axios.create({});

unlogined.defaults.baseURL = 'https://api.stage.koala.im/';

export default unlogined;
