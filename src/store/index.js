import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import loading from './loading';
import toggle from './toggle';
import myPage, { changeNameSaga, getUserSaga } from './myPage';

const rootReducer = combineReducers({
  auth,
  loading,
  toggle,
  myPage,
});

export function* rootSaga() {
  yield all([authSaga(), refreshLoginSaga(), signUpRegisterSaga(), changeNameSaga(), getUserSaga()]);
}

export default rootReducer;
