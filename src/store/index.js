import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga, nonLoginSaga } from './auth';
import toggle from './toggle';
import myPage, { changeNameSaga, getUserSaga, changeImageSaga } from './myPage';
import loading from './loading';
import keyword, {
  inquiryKeywordSaga,
  getKeywordListSaga,
  deleteKeywordListSaga,
  moveKeywordItemSaga,
  readKeywordItemSaga,
} from './keyword';
import chat, { authSchoolSaga, sendSchoolSaga } from './chat';

const rootReducer = combineReducers({
  auth,
  loading,
  keyword,
  toggle,
  myPage,
  chat,
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
    changeImageSaga(),
    nonLoginSaga(),
  ]);
}

export default rootReducer;
