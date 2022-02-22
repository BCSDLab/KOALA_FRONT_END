import { scrapAPI } from 'api';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

// const [GETSCRAPLIST, GETSCRAPLIST_SUCCESS, GETSCRAPLIST_FAILURE] = createRequestSagaActionTypes('scrap/GETSCRAPLIST');
// const [DELETESCRAPITEM, DELETESCRAPITEM_SUCCESS, DELETESCRAPITEM_FAILURE] =
//   createRequestSagaActionTypes('scrap/DELETESCRAPITEM');
// const [GETMEMO, GETMEMO_SUCCESS, GETMEMO_FAILURE] = createRequestSagaActionTypes('scrap/GETMEMO');
// const [FIXMEMO, FIXMEMO_SUCCESS, FIXMEMO_FAILURE] = createRequestSagaActionTypes('scrap/FIXMEMO');
// const [WRITEMEMO, WRITEMEMO_SUCCESS, WRITEMEMO_FAILURE] = createRequestSagaActionTypes('scrap/WRITEMEMO');

const [GET_SCRAP_LIST, GET_SCRAP_LIST_SUCCESS, GET_SCRAP_LIST_FAILURE] = createRequestSagaActionTypes('scrap/GET_SCRAP_LIST');
const [DELETE_SCRAP_ITEM, DELETE_SCRAP_ITEM_SUCCESS, DELETE_SCRAP_ITEM_FAILURE] =
  createRequestSagaActionTypes('scrap/DELETE_SCRAP_ITEM');
const [GET_MEMO, GET_MEMO_SUCCESS, GET_MEMO_FAILURE] = createRequestSagaActionTypes('scrap/GET_MEMO');
const [FIX_MEMO, FIX_MEMO_SUCCESS,FIX_MEMO_FAILURE] = createRequestSagaActionTypes('scrap/FIX_MEMO');
const [WRITE_MEMO, WRITE_MEMO_SUCCESS, WRITE_MEMO_FAILURE] = createRequestSagaActionTypes('scrap/WRITE_MEMO');

export const getScrapList = createAction(GET_SCRAP_LIST);
export const deleteScrapItem = createAction(DELETE_SCRAP_ITEM, (noticeIdList) => noticeIdList);
export const getMemo = createAction(GET_MEMO);
export const fixMemo = createAction(FIX_MEMO, (memo) => memo);
export const writeMemo = createAction(WRITE_MEMO, (memo) => memo);

const getScrapSaga = createRequestSaga(GET_SCRAP_LIST, scrapAPI.getScrapList);
export function* getScrapListSaga() {
  yield takeLatest(GET_SCRAP_LIST, getScrapSaga);
}

const deleteScrapSaga = createRequestSaga(DELETE_SCRAP_ITEM, scrapAPI.deleteScrapItem);
export function* deleteScrapItemSaga() {
  yield takeLatest(DELETE_SCRAP_ITEM, deleteScrapSaga);
}

const getMemoListSaga = createRequestSaga(GET_MEMO, scrapAPI.getMemo);
export function* getMemoSaga() {
  yield takeLatest(GET_MEMO, getMemoListSaga);
}

const fixMemoItemSaga = createRequestSaga(FIX_MEMO, scrapAPI.fixMemo);
export function* fixMemoSaga() {
  yield takeLatest(FIX_MEMO, fixMemoItemSaga);
}

const writeMemoItemSaga = createRequestSaga(WRITE_MEMO, scrapAPI.writeMemo);
export function* writeMemoSaga() {
  yield takeLatest(WRITE_MEMO, writeMemoItemSaga);
}

const initialState = {
  scrapList: [],
  memoList: [],
  getScrapListResponse: false,
  deleteScrapResponse: false,
  getMemoListResponse: false,
  fixMemoResponse: false,
  writeMemoResponse: false,
};

const scrap = handleActions(
  {
    [GET_SCRAP_LIST_SUCCESS]: (state, { payload: scrap }) => ({
      ...state,
      scrapList: scrap.body,
      getScrapListResponse: true,
      deleteScrapResponse: false,
      getMemoListResponse: false,
      fixMemoResponse: false,
      writeMemoResponse: false,
    }),
    [GET_SCRAP_LIST_FAILURE]: (state) => ({
      ...state,
      scrapList: [],
      getScrapListResponse: false,
      deleteScrapResponse: false,
    }),

    [GET_MEMO_SUCCESS]: (state, { payload: scrap }) => ({
      ...state,
      memoList: scrap.body,
      getMemoListResponse: true,
    }),
    [GET_MEMO_FAILURE]: () => ({
      getMemoListResponse: false,
    }),

    [DELETE_SCRAP_ITEM_SUCCESS]: () => ({
      deleteScrapResponse: true,
    }),
    [DELETE_SCRAP_ITEM_FAILURE]: () => ({
      deleteScrapResponse: false,
    }),

    [FIX_MEMO_SUCCESS]: () => ({
      fixMemoResponse: true,
    }),
    [FIX_MEMO_FAILURE]: () => ({
      fixMemoResponse: false,
    }),

    [WRITE_MEMO_SUCCESS]: () => ({
      writeMemoResponse: true,
    }),
    [WRITE_MEMO_FAILURE]: () => ({
      writeMemoResponse: false,
    }),
  },
  initialState
);

export default scrap;
