import { historyAPI } from 'api';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const [GET_HISTORY_LIST, GET_HISTORY_LIST_SUCCESS, GET_HISTORY_LIST_FAILURE] =
  createRequestSagaActionTypes('history/GETHISTORYLIST');
const [DELETE_HISTORY_LIST, DELETE_HISTORY_LIST_SUCCESS, DELETE_HISTORY_LIST_FAILURE] =
  createRequestSagaActionTypes('history/DELETEHISTORYLIST');
const [READ_HISTORY_ITEM, READ_HISTORY_ITEM_SUCCESS, READ_HISTORY_ITEM_FAILURE] =
  createRequestSagaActionTypes('history/READHISTORYITEM');
const [MOVE_TO_SCRAP, MOVE_TO_SCRAP_SUCCESS, MOVE_TO_SCRAP_FAILURE] = createRequestSagaActionTypes('history/MOVETOSCRAP');
const [CLEAR_HISTORY_LIST, CLEAR_HISTORY_LIST_SUCCESS, CLEAR_HISTORY_LIST_FAILURE] =
  createRequestSagaActionTypes('history/CLEARHISTORYLIST');
const [UNDO_HISTORY_LIST, UNDO_HISTORY_LIST_SUCCESS, UNDO_HISTORY_LIST_FAILURE] =
  createRequestSagaActionTypes('history/UNDOHISTORYLIST');

export const getHistoryList = createAction(GET_HISTORY_LIST, (pageNum) => pageNum);
export const deleteHistoryList = createAction(DELETE_HISTORY_LIST, (historyList) => historyList);
export const readHistoryItem = createAction(READ_HISTORY_ITEM, (noticeId) => noticeId);
export const moveToScrap = createAction(MOVE_TO_SCRAP, (idList) => idList);
export const clearHistoryList = createAction(CLEAR_HISTORY_LIST);
export const undoHistoryList = createAction(UNDO_HISTORY_LIST, (idList) => idList);

const getHistorySaga = createRequestSaga(GET_HISTORY_LIST, historyAPI.getHistoryList);
export function* getHistoryListSaga() {
  yield takeLatest(GET_HISTORY_LIST, getHistorySaga);
}

const deleteHistorySaga = createRequestSaga(DELETE_HISTORY_LIST, historyAPI.deleteHistoryList);
export function* deleteHistoryListSaga() {
  yield takeLatest(DELETE_HISTORY_LIST, deleteHistorySaga);
}

const readHistorySaga = createRequestSaga(READ_HISTORY_ITEM, historyAPI.readHistoryItem);
export function* readHistoryItemSaga() {
  yield takeLatest(READ_HISTORY_ITEM, readHistorySaga);
}

const moveToScrapSaga = createRequestSaga(MOVE_TO_SCRAP, historyAPI.moveToScrap);
export function* moveToScrapItemSaga() {
  yield takeLatest(MOVE_TO_SCRAP, moveToScrapSaga);
}

const undoHistorySaga = createRequestSaga(UNDO_HISTORY_LIST, historyAPI.undoHistoryList);
export function* undoHistoryListSaga() {
  yield takeLatest(UNDO_HISTORY_LIST, undoHistorySaga);
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
    [GET_HISTORY_LIST_SUCCESS]: (state, { payload: history }) => ({
      ...state,
      historyList: state.historyList.concat(history.body.length===0?null:history.body),
      getHistoryListResponse: true,
      deleteHistoryResponse: false,
      readHistoryItemResponse: false,
      undoHistoryListResponse: false,
    }),
    [GET_HISTORY_LIST_FAILURE]: (state) => ({
      ...state,
      historyList: [],
      getHistoryListResponse: false,
      deleteHistoryResponse: false,
      readHistoryItemResponse: false,
      undoHistoryListResponse: false,
    }),

    [DELETE_HISTORY_LIST_SUCCESS]: (state) => ({
      ...state,
      historyList: [],
      deleteHistoryResponse: true,
    }),
    [DELETE_HISTORY_LIST_FAILURE]: (state) => ({
      ...state,
      deleteHistoryResponse: false,
    }),

    [READ_HISTORY_ITEM_SUCCESS]: (state) => ({
      ...state,
      readHistoryItemResponse: true,
    }),
    [READ_HISTORY_ITEM_FAILURE]: (state) => ({
      ...state,
      readHistoryItemResponse: false,
    }),

    [MOVE_TO_SCRAP_SUCCESS]: (state) => ({
      ...state,
      moveToScrapResponse: true,
    }),
    [MOVE_TO_SCRAP_FAILURE]: (state) => ({
      ...state,
      moveToScrapResponse: false,
    }),

    [CLEAR_HISTORY_LIST]: (state) => ({
      ...state,
      historyList: [],
    }),

    [UNDO_HISTORY_LIST_SUCCESS]: (state) => ({
      ...state,
      historyList: [],
      undoHistoryListResponse: true,
    }),
    [UNDO_HISTORY_LIST_FAILURE]: (state) => ({
      ...state,
      undoHistoryListResponse: false,
    }),
  },
  initialState
);

export default history;
