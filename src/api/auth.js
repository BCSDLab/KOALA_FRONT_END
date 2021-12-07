import client from './client';

export const login = ({ account, password }) => client.post('user/login', { account, password });
