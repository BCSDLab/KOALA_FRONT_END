import logined from './logined';
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from 'components/Auth/Login/SNSLogin/OAuth/';

const setTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `${token}`;
};

export const login = ({ deviceToken, account, password }) =>
  logined.post(`user/login?device_token=${deviceToken}`, { account, password });

export const kakaoLogin = ({ deviceToken, code }) =>
  logined.post(
    `https://kauth.kakao.com/oauth/token`,
    `grant_type=authorization_code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }
  );

export const socialLogin = ({ snsType, deviceToken, accessToken }) =>
  logined.post(`user/oauth2/${snsType}?device_token=${deviceToken}`, () => {
    if (accessToken != undefined) setTokenOnHeader(accessToken);
  });

export const nonMember = ({ deviceToken }) => logined.post(`/user/non-member?device_token=${deviceToken}`);

export const refresh = () => logined.post('user/refresh');

export const checkNickname = (nickName) => logined.get(`/user/nickname-check?nickname=${nickName}`);

export const checkAccount = (account) => logined.get(`user/account-check?account=${account}`);

export const checkEmail = (email) => logined.get(`user/email-check?email=${email}`);

export const changeNickname = (nickName) => logined.patch(`user/nickname?nickname=${nickName}`);

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

export const keywordAPI = {
  getKeyword: () => logined.get(`keyword`),
  getKeywordList: (keywordName) => logined.get(`keyword/list/${keywordName}?page-num=1`),
  deleteKeywordList: (query) => logined.patch(`keyword/list/notice?${query}`),
  deleteKeywordItem: (id) => logined.patch(`keyword/list/notice?notice-id=${id}`),
  addScrap: (data) => logined.post(`scrap`, { crawling_id: data }),
  readKeywordItem: (id) => logined.patch(`keyword/list/notice/reading-check?notice-id=${id}`),
  getSiteRecommendation: (site) => logined.get(`keyword/site/search/${site}`),
  modifyKeyword: ({ keywordName, object }) => logined.put(`keyword?keyword-name=${keywordName}`, object),
  getKeywordRecommendation: (keyword) => logined.get(`keyword/search/${keyword}`),
  createKeyword: (object) => logined.post(`keyword`, object),
  deleteKeyword: (keyword) => logined.patch(`keyword?keyword-name=${keyword}`),
  getRecommendationSite: () => logined.get(`keyword/site/recommendation`),
  getKeywordDetailInfo: (keywordName) => logined.get(`keyword/detail?keyword-name=${keywordName}`),
};

export const historyAPI = {
  getHistoryList: (pageNum) => logined.get(`/history?page-num=${pageNum}`),
  deleteHistoryList: (historyList) => logined.patch(`history?${historyList}`),
  readHistoryItem: (noticeId) => logined.put(`/history?notice-id=${noticeId}`),
  moveToScrap: (idList) => logined.post(`/scrap`, idList),
  undoHistoryList: (idList) => logined.patch(`history/undo?${idList}`),
};

export const scrapAPI = {
  getScrapList: () => logined.get(`/scrap`),
  deleteScrapItem: (noticeIdList) => logined.delete(`/scrap`, { data: noticeIdList }),
  getMemo: () => logined.get(`/memo`),
  fixMemo: (memo) => logined.patch(`/memo`, { memo: memo.memo, user_scrap_id: memo.user_scrap_id }),
  writeMemo: (memo) => logined.post(`/memo`, memo),
};
