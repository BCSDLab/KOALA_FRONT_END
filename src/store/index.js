import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modifyKeyword, {
  getKeywordRecommendationSaga,
  patchModifyKeywordSaga,
  getSiteRecommendationSaga,
  createKeywordSaga,
  getStarSiteSaga,
  getStarKeywordSaga,
  detailKeywordSaga,
} from './modifyKeyword';
import auth, {
  authSaga,
  getOAuthTokenAuthSaga,
  socialAuthSaga,
  refreshLoginSaga,
  signUpRegisterSaga,
  sendPasswordSaga,
  authPasswordSaga,
  sendAccountSaga,
  authAccountSaga,
  setAccountSaga,
  changeingPasswordSaga,
  nonLoginSaga,
} from './auth';
import loading from './loading';
import toggle from './toggle';
import myPage, { changeNameSaga, getUserSaga, changeImageSaga, sendSchoolSaga, authSchoolSaga } from './myPage';
import keyword, {
  inquiryKeywordSaga,
  getKeywordListSaga,
  deleteKeywordListSaga,
  moveKeywordItemSaga,
  readKeywordItemSaga,
  deleteKeywordSaga,
} from './keyword';
import history, {
  getHistoryListSaga,
  deleteHistoryListSaga,
  readHistoryItemSaga,
  moveToScrapItemSaga,
  undoHistoryListSaga,
} from './history';
import scrap, { getScrapListSaga, getMemoSaga, deleteScrapItemSaga, fixMemoSaga, writeMemoSaga } from './scrap';

const rootReducer = combineReducers({
  auth,
  loading,
  modifyKeyword,
  toggle,
  keyword,
  myPage,
  history,
  scrap,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    getOAuthTokenAuthSaga(),
    socialAuthSaga(),
    refreshLoginSaga(),
    signUpRegisterSaga(),
    inquiryKeywordSaga(),
    getKeywordListSaga(),
    deleteKeywordListSaga(),
    detailKeywordSaga(),
    moveKeywordItemSaga(),
    readKeywordItemSaga(),
    changeNameSaga(),
    getUserSaga(),
    authSchoolSaga(),
    sendSchoolSaga(),
    sendPasswordSaga(),
    authPasswordSaga(),
    sendAccountSaga(),
    authAccountSaga(),
    setAccountSaga(),
    nonLoginSaga(),
    changeingPasswordSaga(),
    changeImageSaga(),
    getSiteRecommendationSaga(),
    patchModifyKeywordSaga(),
    getKeywordRecommendationSaga(),
    createKeywordSaga(),
    deleteKeywordSaga(),
    deleteHistoryListSaga(),
    readHistoryItemSaga(),
    undoHistoryListSaga(),
    moveToScrapItemSaga(),
    getHistoryListSaga(),
    getScrapListSaga(),
    getMemoSaga(),
    deleteScrapItemSaga(),
    fixMemoSaga(),
    writeMemoSaga(),
    getStarSiteSaga(),
    getStarKeywordSaga(),
  ]);
}

export default rootReducer;
