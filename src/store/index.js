import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import modifyKeyword,{getKeywordRecommendationSaga,patchModifyKeywordSaga} from './modifyKeyword';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
  modifyKeyword
});

export function* rootSaga() {
  yield all([authSaga(), refreshLoginSaga(), signUpRegisterSaga(), getKeywordRecommendationSaga(),patchModifyKeywordSaga()]);
}

export default rootReducer;
