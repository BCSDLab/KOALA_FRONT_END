import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import loading from './loading';
import keyword,{inquiryKeywordSaga,getKeywordListSaga,deleteKeywordListSaga} from './keyword';

const rootReducer = combineReducers({
  auth,
  loading,
  keyword
});

export function* rootSaga() {
  yield all([authSaga(), refreshLoginSaga(), signUpRegisterSaga(),inquiryKeywordSaga(),getKeywordListSaga(),deleteKeywordListSaga()]);
}

export default rootReducer;
