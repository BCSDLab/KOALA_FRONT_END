import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import history,{
  getHistoryListSaga,
  deleteHistoryListSaga,
  readHistoryItemSaga} from './history';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
  history
});

export function* rootSaga() {
  yield all([
    authSaga(),
    refreshLoginSaga(),
    signUpRegisterSaga(),
    getHistoryListSaga(),
    deleteHistoryListSaga(),
    readHistoryItemSaga()]);
}

export default rootReducer;
