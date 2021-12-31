import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import loading from './loading';
import toggle from './toggle';

const rootReducer = combineReducers({
  auth,
  loading,
  toggle,
});

export function* rootSaga() {
  yield all([authSaga(), refreshLoginSaga(), signUpRegisterSaga()]);
}

export default rootReducer;
