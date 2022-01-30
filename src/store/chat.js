import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';
/*
- 채팅 기능에 이용할 예정
*/
const initialState = {};

const chat = handleActions({}, initialState);

export default chat;
