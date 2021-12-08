import client from './client';

export const login = ({ account, password }) => client.post('user/login', { account, password });

export const refresh = ({ config }) => client.post('user/refresh', config);
