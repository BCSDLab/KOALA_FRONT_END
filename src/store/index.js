import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import toggle from './toggle';
import loading from './loading';
import keyword,{
  inquiryKeywordSaga,
  getKeywordListSaga,
  deleteKeywordListSaga,
  moveKeywordItemSaga,
  readKeywordItemSaga} from './keyword';
import myPage, { changeNameSaga, getUserSaga } from './myPage';
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
  ]);
}

export default rootReducer;
