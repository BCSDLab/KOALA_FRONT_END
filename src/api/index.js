import logined from './logined';

export const login = ({ deviceToken, account, password }) =>
  logined.post(`user/login?device_token=${deviceToken}`, { account, password });

export const nonMember = ({ deviceToken }) => logined.post(`/user/non-member?device_token=${deviceToken}`);

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

export const changeUserProfile = (file) =>
  logined.patch('user/profile', file, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteUser = () => logined.patch('user/delete');

export const getUserInfo = () => logined.get('user/my');

export const sendUniversityEmail = (email) => logined.post('user/email-send/UNIVERSITY', email);

export const authUniversityEmail = ({ email, secret }) =>
  logined.post('user/email/certification/UNIVERSITY', { email, secret });

export const signUp = ({ account, password, find_email, nickname }) =>
  logined.post('/user/sing-in', { account, password, find_email, nickname });

export const historyAPI = {
  getHistoryList: (pageNum) => logined.get(`/history?pageNum=${pageNum}`),
  deleteHistoryList: (historyList) => logined.patch(`history?${historyList}`),
  readHistoryItem: (noticeId) => logined.put(`/history?notice-id=${noticeId}`),
  moveToScrap: (idList) => logined.post(`/scrap`, idList),
  undoHistoryList: (idList) => logined.patch(`history/undo?${idList}`)
};

export const scrapAPI = {
  getScrapList: () => logined.get(`/scrap`),
  deleteScrapItem: (noticeIdList) => logined.delete(`/scrap`, { data: noticeIdList }),
  getMemo: () => logined.get(`/memo`),
  fixMemo: (memo) => logined.patch(`/memo`, { memo: memo.memo, user_scrap_id: memo.user_scrap_id }),
  writeMemo: (memo) => logined.post(`/memo`, memo),
};
export const keywordAPI = {
  getKeyword: () => logined.get(`/keyword`),
  getKeywordList: (keywordName) => logined.get(`/keyword/list?keyword-name=${keywordName}`),
  deleteKeywordList: (query) => logined.patch(`/keyword/list/notice?${query}`),
  deleteKeywordItem: (id) => logined.patch(`/keyword/list/notice?notice-id=${id}`),
  addScrap: (data) => logined.post(`/scrap`, { board_id: data }),
  readKeywordItem: (id) => logined.patch(`/keyword/list/notice/reading-check?notice-id=${id}`),
  getRecommendation: (site) => logined.get(`keyword/site/search?site=${site}`),
  modifyKeyword: ({ keywordName, object }) => logined.put(`keyword?keyword-name=${keywordName}`, object),
};
