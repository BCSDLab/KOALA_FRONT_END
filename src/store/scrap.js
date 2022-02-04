import { scrapAPI } from 'api';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const [GETSCRAPLIST, GETSCRAPLIST_SUCCESS, GETSCRAPLIST_FAILURE] = createRequestSagaActionTypes('scrap/GETSCRAPLIST');
const [DELETESCRAPITEM, DELETESCRAPITEM_SUCCESS, DELETESCRAPITEM_FAILURE] =
  createRequestSagaActionTypes('scrap/DELETESCRAPITEM');
const [GETMEMO, GETMEMO_SUCCESS, GETMEMO_FAILURE] = createRequestSagaActionTypes('scrap/GETMEMO');
const [FIXMEMO, FIXMEMO_SUCCESS, FIXMEMO_FAILURE] = createRequestSagaActionTypes('scrap/FIXMEMO');
const [WRITEMEMO, WRITEMEMO_SUCCESS, WRITEMEMO_FAILURE] = createRequestSagaActionTypes('scrap/WRITEMEMO');

export const getScrapList = createAction(GETSCRAPLIST);
export const deleteScrapItem = createAction(DELETESCRAPITEM, (noticeIdList) => noticeIdList);
export const getMemo = createAction(GETMEMO);
export const fixMemo = createAction(FIXMEMO, (memo) => memo);
export const writeMemo = createAction(WRITEMEMO, (memo) => memo);

const getScrapSaga = createRequestSaga(GETSCRAPLIST, scrapAPI.getScrapList);
export function* getScrapListSaga() {
  yield takeLatest(GETSCRAPLIST, getScrapSaga);
}

const deleteScrapSaga = createRequestSaga(DELETESCRAPITEM, scrapAPI.deleteScrapItem);
export function* deleteScrapItemSaga() {
  yield takeLatest(DELETESCRAPITEM, deleteScrapSaga);
}

const getMemoListSaga = createRequestSaga(GETMEMO, scrapAPI.getMemo);
export function* getMemoSaga() {
  yield takeLatest(GETMEMO, getMemoListSaga);
}

const fixMemoItemSaga = createRequestSaga(FIXMEMO, scrapAPI.fixMemo);
export function* fixMemoSaga() {
  yield takeLatest(FIXMEMO, fixMemoItemSaga);
}

const writeMemoItemSaga = createRequestSaga(WRITEMEMO, scrapAPI.writeMemo);
export function* writeMemoSaga() {
  yield takeLatest(WRITEMEMO, writeMemoItemSaga);
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
    [GETSCRAPLIST_SUCCESS]: (state, { payload: scrap }) => ({
      ...state,
      scrapList: scrap.body,
      getScrapListResponse: true,
      deleteScrapResponse: false,
      getMemoListResponse: false,
      fixMemoResponse: false,
      writeMemoResponse: false,
    }),
    [GETSCRAPLIST_FAILURE]: (state) => ({
      ...state,
      scrapList: [],
      getScrapListResponse: false,
      deleteScrapResponse: false,
    }),

    [GETMEMO_SUCCESS]: (state, { payload: scrap }) => ({
      ...state,
      memoList: scrap.body,
      getMemoListResponse: true,
    }),
    [GETMEMO_FAILURE]: () => ({
      getMemoListResponse: false,
    }),

    [DELETESCRAPITEM_SUCCESS]: () => ({
      deleteScrapResponse: true,
    }),
    [DELETESCRAPITEM_FAILURE]: () => ({
      deleteScrapResponse: false,
    }),

    [FIXMEMO_SUCCESS]: () => ({
      fixMemoResponse: true,
    }),
    [FIXMEMO_FAILURE]: () => ({
      fixMemoResponse: false,
    }),

    [WRITEMEMO_SUCCESS]: () => ({
      writeMemoResponse: true,
    }),
    [WRITEMEMO_FAILURE]: () => ({
      writeMemoResponse: false,
    }),
  },
  initialState
);

export default scrap;
