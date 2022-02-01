import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modifyKeyword, {
  getKeywordRecommendationSaga,
  patchModifyKeywordSaga,
  getSiteRecommendationSaga,
  createKeywordSaga,
} from './modifyKeyword';
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
    getSiteRecommendationSaga(),
    patchModifyKeywordSaga(),
    getKeywordRecommendationSaga(),
    createKeywordSaga(),
  ]);
}

export default rootReducer;
