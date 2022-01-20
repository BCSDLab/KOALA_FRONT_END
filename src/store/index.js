import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, {
  authSaga,
  refreshLoginSaga,
  signUpRegisterSaga,
  sendPasswordSaga,
  authPasswordSaga,
  sendAccountSaga,
  authAccountSaga,
  setAccountSaga,
} from './auth';
import loading from './loading';
import toggle from './toggle';
import myPage, { changeNameSaga, getUserSaga } from './myPage';
import chat, { authSchoolSaga, sendSchoolSaga } from './chat';

const rootReducer = combineReducers({
  auth,
  loading,
  toggle,
  myPage,
  chat,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    refreshLoginSaga(),
    signUpRegisterSaga(),
    changeNameSaga(),
    getUserSaga(),
    authSchoolSaga(),
    sendSchoolSaga(),
    sendPasswordSaga(),
    authPasswordSaga(),
    sendAccountSaga(),
    authAccountSaga(),
    setAccountSaga(),
  ]);
}

export default rootReducer;
