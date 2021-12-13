import logined from './logined';
import unlogined from './unlogined';

export const login = ({ account, password }) => unlogined.post('user/login', { account, password });

export const refresh = () => logined.post('user/refresh');
