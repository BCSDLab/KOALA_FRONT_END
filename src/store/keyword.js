import { keywordAPI } from 'api';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const [GET_KEYWORD, GET_KEYWORD_SUCCESS, GET_KEYWORD_FAILURE] = createRequestSagaActionTypes('keyword/INQUIRY');
const [DELETE_KEYWORD, DELETE_KEYWORD_SUCCESS, DELETE_KEYWORD_FAILURE] = createRequestSagaActionTypes('keyword/DELETE');
const [GET_KEYWORD_LIST, GET_KEYWORD_LIST_SUCCESS, GET_KEYWORD_LIST_FAILURE] =
  createRequestSagaActionTypes('keyword/GETKEYWORDLIST');
const [DELETE_KEYWORD_LIST, DELETE_KEYWORD_LIST_SUCCESS, DELETE_KEYWORD_LIST_FAILURE] =
  createRequestSagaActionTypes('keyword/DELETEKEYWORDLIST');
const [MOVE_KEYWORD_ITEM, MOVE_KEYWORD_ITEM_SUCCESS, MOVE_KEYWORD_ITEM_FAILURE] =
  createRequestSagaActionTypes('keyword/MOVEKEYWORDITEM');
const [READ_KEYWORD_ITEM, READ_KEYWORD_ITEM_SUCCESS, READ_KEYWORD_ITEM_FAILURE] =
  createRequestSagaActionTypes('keyword/READKEYWORDITEM');

export const inquiry = createAction(GET_KEYWORD);
export const getKeywordList = createAction(GET_KEYWORD_LIST);
export const deleteKeywordList = createAction(DELETE_KEYWORD_LIST, (query) => query);
export const moveKeywordItem = createAction(MOVE_KEYWORD_ITEM);
export const readKeywordItem = createAction(READ_KEYWORD_ITEM, (id) => id);
export const deleteKeyword = createAction(DELETE_KEYWORD, (keyword) => keyword);

const inquirySaga = createRequestSaga(GET_KEYWORD, keywordAPI.getKeyword);
export function* inquiryKeywordSaga() {
  yield takeLatest(GET_KEYWORD, inquirySaga);
}

const getListSaga = createRequestSaga(GET_KEYWORD_LIST, keywordAPI.getKeywordList);
export function* getKeywordListSaga() {
  yield takeLatest(GET_KEYWORD_LIST, getListSaga);
}

const deleteListSaga = createRequestSaga(DELETE_KEYWORD_LIST, keywordAPI.deleteKeywordList);
export function* deleteKeywordListSaga() {
  yield takeLatest(DELETE_KEYWORD_LIST, deleteListSaga);
}

const moveItemSaga = createRequestSaga(MOVE_KEYWORD_ITEM, keywordAPI.addScrap);
export function* moveKeywordItemSaga() {
  yield takeLatest(MOVE_KEYWORD_ITEM, moveItemSaga);
}

const readItemSaga = createRequestSaga(READ_KEYWORD_ITEM, keywordAPI.readKeywordItem);
export function* readKeywordItemSaga() {
  yield takeLatest(READ_KEYWORD_ITEM, readItemSaga);
}

const deleteSaga = createRequestSaga(DELETE_KEYWORD, keywordAPI.deleteKeyword);
export function* deleteKeywordSaga() {
  yield takeLatest(DELETE_KEYWORD, deleteSaga);
}

const initialState = {
  keywords: [],
  keywordList: [],
  inquiryResponse: false,
  getKeywordListResponse: false,
  deleteKeywordListResponse: false,
  moveKeywordItemResponse: false,
  readKeywordItemResponse: false,
  deleteKeywordResponse: false,
};

const keyword = handleActions(
  {
    [GET_KEYWORD_SUCCESS]: (state, { payload: keyword }) => ({
      ...state,
      keywords: keyword.body,
      inquiryResponse: true,
    }),
    [GET_KEYWORD_FAILURE]: (state) => ({
      ...state,
      keywords: [],
      inquiryResponse: false,
    }),

    [GET_KEYWORD_LIST_SUCCESS]: (state, { payload: keyword }) => ({
      ...state,
      keywordList: keyword.body,
      getKeywordListResponse: true,
    }),

    [GET_KEYWORD_LIST_FAILURE]: (state) => ({
      ...state,
      keywordList: [],
      getKeywordListResponse: false,
    }),

    [DELETE_KEYWORD_LIST_SUCCESS]: () => ({
      deleteKeywordList: true,
    }),

    [DELETE_KEYWORD_LIST_FAILURE]: () => ({
      deleteKeywordList: false,
    }),
    [MOVE_KEYWORD_ITEM_SUCCESS]: () => ({
      moveKeywordItemResponse: true,
    }),

    [MOVE_KEYWORD_ITEM_FAILURE]: () => ({
      moveKeywordItemResponse: false,
    }),
    [READ_KEYWORD_ITEM_SUCCESS]: () => ({
      readKeywordItemResponse: true,
    }),

    [READ_KEYWORD_ITEM_FAILURE]: () => ({
      readKeywordItemResponse: false,
    }),
    [DELETE_KEYWORD_FAILURE]: () => ({
      deleteKeywordResponse: false,
    }),
    [DELETE_KEYWORD_SUCCESS]: () => ({
      deleteKeywordResponse: true,
    }),
  },
  initialState
);

export default keyword;
