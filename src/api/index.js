import logined from './logined';

export const login = ({ account, password }) => logined.post('user/login', { account, password });

export const refresh = () => logined.post('user/refresh');

export const checkNickname = (nickName) => logined.get(`/user/nickname-check?nickname=${nickName}`);

export const checkAccount = (account) => logined.get(`user/account-check?account=${account}-`);

export const checkEmail = (email) => logined.get(`user/email-check?email=${email}`);

export const signUp = ({ account, password, find_email, nickname }) =>
  logined.post('/user/sing-in', { account, password, find_email, nickname });

export const historyAPI = {
  getHistoryList : (pageNum) => logined.get(`/history?pageNum=${pageNum}`),
  deleteHistoryList : (historyList) => logined.patch(`/history/${historyList}`),
  readHistoryItem : (noticeId) => logined.put(`/history/${noticeId}`)
}