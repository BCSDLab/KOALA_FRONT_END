import { historyAPI } from 'api';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const [GETHISTORYLIST, GETHISTORYLIST_SUCCESS, GETHISTORYLIST_FAILURE] =
  createRequestSagaActionTypes('history/GETHISTORYLIST');
const [DELETEHISTORYLIST, DELETEHISTORYLIST_SUCCESS, DELETEHISTORYLIST_FAILURE] =
  createRequestSagaActionTypes('history/DELETEHISTORYLIST');
const [READHISTRORYITEM, READHISTRORYITEM_SUCCESS, READHISTRORYITEM_FAILURE] =
  createRequestSagaActionTypes('history/READHISTORYITEM');
const [MOVETOSCRAP, MOVETOSCRAP_SUCCESS, MOVETOSCRAP_FAILURE] = createRequestSagaActionTypes('history/MOVETOSCRAP');
const [CLEARHISTORYlIST, CLEARHISTORYLIST_SUCCESS, CLEARHISTORYlIST_FAILURE] =
  createRequestSagaActionTypes('history/CLEARHISTORYLIST');
const [UNDOHISTORYLIST, UNDOHISTORYLIST_SUCCESS, UNDOHISTORYLIST_FAILURE] =
  createRequestSagaActionTypes('history/UNDOHISTORYLIST');

export const getHistoryList = createAction(GETHISTORYLIST, (pageNum) => pageNum);
export const deleteHistoryList = createAction(DELETEHISTORYLIST, (historyList) => historyList);
export const readHistoryItem = createAction(READHISTRORYITEM, (noticeId) => noticeId);
export const moveToScrap = createAction(MOVETOSCRAP, (idList) => idList);
export const clearHistoryList = createAction(CLEARHISTORYlIST);
export const undoHistoryList = createAction(UNDOHISTORYLIST, (idList) => idList);

const getHistorySaga = createRequestSaga(GETHISTORYLIST, historyAPI.getHistoryList);
export function* getHistoryListSaga() {
  yield takeLatest(GETHISTORYLIST, getHistorySaga);
}

const deleteHistorySaga = createRequestSaga(DELETEHISTORYLIST, historyAPI.deleteHistoryList);
export function* deleteHistoryListSaga() {
  yield takeLatest(DELETEHISTORYLIST, deleteHistorySaga);
}

const readHistorySaga = createRequestSaga(READHISTRORYITEM, historyAPI.readHistoryItem);
export function* readHistoryItemSaga() {
  yield takeLatest(READHISTRORYITEM, readHistorySaga);
}

const moveToScrapSaga = createRequestSaga(MOVETOSCRAP, historyAPI.moveToScrap);
export function* moveToScrapItemSaga() {
  yield takeLatest(MOVETOSCRAP, moveToScrapSaga);
}

const undoHistorySaga = createRequestSaga(UNDOHISTORYLIST, historyAPI.undoHistoryList);
export function* undoHistoryListSaga() {
  yield takeLatest(UNDOHISTORYLIST, undoHistorySaga);
}

const initialState = {
  historyList: [],
  getHistoryListResponse: false,
  deleteHistoryResponse: false,
  readHistoryItemResponse: false,
  moveToScrapResponse: false,
  undoHistoryListResponse: false,
};

const history = handleActions(
  {
    [GETHISTORYLIST_SUCCESS]: (state, { payload: history }) => ({
      ...state,
      historyList: [...state.historyList, ...history.body],
      getHistoryListResponse: true,
      deleteHistoryResponse: false,
      readHistoryItemResponse: false,
      undoHistoryListResponse: false,
    }),
    [GETHISTORYLIST_FAILURE]: (state) => ({
      ...state,
      historyList: [],
      getHistoryListResponse: false,
      deleteHistoryResponse: false,
      readHistoryItemResponse: false,
      undoHistoryListResponse: false,
    }),

    [DELETEHISTORYLIST_SUCCESS]: (state) => ({
      ...state,
      historyList: [],
      deleteHistoryResponse: true,
    }),
    [DELETEHISTORYLIST_FAILURE]: (state) => ({
      ...state,
      deleteHistoryResponse: false,
    }),

    [READHISTRORYITEM_SUCCESS]: (state) => ({
      ...state,
      readHistoryItemResponse: true,
    }),
    [READHISTRORYITEM_FAILURE]: (state) => ({
      ...state,
      readHistoryItemResponse: false,
    }),

    [MOVETOSCRAP_SUCCESS]: (state) => ({
      ...state,
      moveToScrapResponse: true,
    }),
    [MOVETOSCRAP_FAILURE]: (state) => ({
      ...state,
      moveToScrapResponse: false,
    }),

    [CLEARHISTORYlIST]: (state) => ({
      ...state,
      historyList: [],
    }),

    [UNDOHISTORYLIST_SUCCESS]: (state) => ({
      ...state,
      historyList: [],
      undoHistoryListResponse: true,
    }),
    [UNDOHISTORYLIST_FAILURE]: (state) => ({
      ...state,
      undoHistoryListResponse: false,
    }),
  },
  initialState
);

export default history;
