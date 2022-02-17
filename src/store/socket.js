import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';

const [GET_WEBSOCKET_TOKEN, GET_WEBSOCKET_TOKEN_SUCCESS, GET_WEBSOCKET_TOKEN_FAILURE] =
  createRequestSagaActionTypes('socket/GET_WEBSOCKET_TOKEN');
const [CONNECT_WEBSOCKET, CONNECT_WEBSOCKET_SUCCESS, CONNECT_WEBSOCKET_FAILURE] =
  createRequestSagaActionTypes('socket/CONNECT_WEBSOCKET');
const [GET_CHAT_LIST, GET_CHAT_LIST_SUCCESS, GET_CHAT_LIST_FAILURE] =
  createRequestSagaActionTypes('socket/GET_CHAT_LIST');
const GET_CHAT_MEMBER = 'GET_CHAT_MEMBER';

export const getWebToken = createAction(GET_WEBSOCKET_TOKEN);
export const connectWebsocket = createAction(CONNECT_WEBSOCKET);
export const getChatList = createAction(GET_CHAT_LIST);
export const getChatMember = createAction(GET_CHAT_MEMBER);

const getWebSaga = createRequestSaga(GET_WEBSOCKET_TOKEN, API.getWebsocketToken);
const getChatSaga = createRequestSaga(GET_CHAT_LIST, API.getChatList);

export function* getWebTokenSaga() {
  yield takeLatest(GET_WEBSOCKET_TOKEN, getWebSaga);
}

export function* getChatListSaga() {
  yield takeLatest(GET_CHAT_LIST, getChatSaga);
}

const initialState = {
  messages: [],
  member: '',
  webToken: '',
};

const socket = handleActions(
  {
    [GET_CHAT_MEMBER]: (state, { payload }) => ({
      ...state,
      member: payload,
    }),
    [GET_WEBSOCKET_TOKEN_SUCCESS]: (state, { payload }) => ({
      ...state,
      webToken: payload.body.socket_token,
    }),
    [GET_WEBSOCKET_TOKEN_FAILURE]: (state) => ({
      ...state,
    }),
    [GET_CHAT_LIST_SUCCESS]: (state, { payload }) => ({
      ...state,
      messages: [...payload.body],
    }),
    [GET_CHAT_LIST_FAILURE]: (state) => ({
      ...state,
    }),
  },
  initialState
);

export default socket;
