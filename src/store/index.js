
   
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import modifyKeyword,{getKeywordRecommendationSaga,patchModifyKeywordSaga,getSiteRecommendationSaga,getKeywordRecommendationSaga} from './modifyKeyword';
import toggle from './toggle';
import myPage, { changeNameSaga, getUserSaga, changeImageSaga } from './myPage';
import loading from './loading';
import keyword,{
  inquiryKeywordSaga,
  getKeywordListSaga,
  deleteKeywordListSaga,
  moveKeywordItemSaga,
  readKeywordItemSaga} from './keyword';
import chat, { authSchoolSaga, sendSchoolSaga } from './chat';

const rootReducer = combineReducers({
  auth,
  loading,
  modifyKeyword,
  toggle,
  keyword,
  myPage,
  chat
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
    getSiteRecommendationSaga(),
    patchModifyKeywordSaga(),
    getKeywordRecommendationSaga()
  ]);
}

export default rootReducer;
