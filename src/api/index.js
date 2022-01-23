import logined from './logined';

export const login = ({ account, password }) => logined.post('user/login', { account, password });

export const refresh = () => logined.post('user/refresh');

export const checkNickname = (nickName) => logined.get(`/user/nickname-check?nickname=${nickName}`);

export const checkAccount = (account) => logined.get(`user/account-check?account=${account}`);

export const checkEmail = (email) => logined.get(`user/email-check?email=${email}`);

export const changeNickname = (nickName) => logined.post('user/nickname', nickName);

export const sendFindPassword = ({ account, email }) => logined.post('user/email-send/PASSWORD', { account, email });

export const authFindPassword = (account, email, secret) =>
  logined.post('user/email/certification/PASSWORD', account, email, secret);

export const changePassword = (account, password) => logined.post('/user/password-change', account, password);

export const sendFindAccount = ({ email }) => logined.post('user/email-send/ACCOUNT', { email });

export const authFindAccount = (email, secret) => logined.post('user/email/certification/ACCOUNT', email, secret);

export const findAccount = ({ email }) => logined.get(`/user/account-find?email=${email}`);

export const deleteUser = () => logined.patch('user/delete');

export const getUserInfo = () => logined.get('user/my');

export const sendUniversityEmail = (email) => logined.post('user/email-send/UNIVERSITY', email);

export const authUniversityEmail = ({ email, secret }) =>
  logined.post('user/email/certification/UNIVERSITY', { email, secret });

export const signUp = ({ account, password, find_email, nickname }) =>
  logined.post('/user/sing-in', { account, password, find_email, nickname });
