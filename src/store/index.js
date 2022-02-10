import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import history, {
  getHistoryListSaga,
  deleteHistoryListSaga,
  readHistoryItemSaga,
  moveToScrapItemSaga,
  undoHistoryListSaga
} from './history';
import scrap, { getScrapListSaga, getMemoSaga, deleteScrapItemSaga, fixMemoSaga, writeMemoSaga } from './scrap';
import modifyKeyword, { getKeywordRecommendationSaga, patchModifyKeywordSaga } from './modifyKeyword';
import auth, {
  authSaga,
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
import myPage, { changeNameSaga, getUserSaga, changeImageSaga } from './myPage';
import keyword, {
  inquiryKeywordSaga,
  getKeywordListSaga,
  deleteKeywordListSaga,
  moveKeywordItemSaga,
  readKeywordItemSaga,
} from './keyword';
import { authSchoolSaga, sendSchoolSaga } from './chat';

const rootReducer = combineReducers({
  auth,
  loading,
  history,
  scrap,
  modifyKeyword,
  toggle,
  keyword,
  myPage,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    refreshLoginSaga(),
    signUpRegisterSaga(),
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
    inquiryKeywordSaga(),
    getKeywordListSaga(),
    deleteKeywordListSaga(),
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
    changeingPasswordSaga(),
    changeImageSaga(),
    getKeywordRecommendationSaga(),
    patchModifyKeywordSaga(),
    nonLoginSaga(),
  ]);
}

export default rootReducer;
