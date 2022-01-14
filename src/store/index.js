import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import history,{
  getHistoryListSaga,
  deleteHistoryListSaga,
  readHistoryItemSaga,
  moveToScrapItemSaga} from './history';
import scrap,{
  getScrapListSaga,
  getMemoSaga,
  deleteScrapItemSaga,
  fixMemoSaga,
  writeMemoSaga
} from './scrap';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
  history,
  scrap
});

export function* rootSaga() {
  yield all([
    authSaga(),
    refreshLoginSaga(),
    signUpRegisterSaga(),
    getHistoryListSaga(),
    deleteHistoryListSaga(),
    readHistoryItemSaga(),
    moveToScrapItemSaga(),
    getScrapListSaga(),
    getMemoSaga(),
    deleteScrapItemSaga(),
    fixMemoSaga(),
    writeMemoSaga()]);
}

export default rootReducer;
