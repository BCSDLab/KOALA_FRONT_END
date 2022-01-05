import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';

const [CHANGENICKNAME, CHANGENICKNAME_SUCCESS, CHANGENICKNAME_FAILURE] =
  createRequestSagaActionTypes('myPage/CHANGENICKNAME');
const [USERINFO, USERINFO_SUCCESS, USERINFO_FAILURE] = createRequestSagaActionTypes('myPage/USERINFO');

export const changeNickname = createAction(CHANGENICKNAME, ({ nickName }) => ({
  nickName,
}));
export const getUserInfo = createAction(USERINFO);

const changeNicknameSaga = createRequestSaga(CHANGENICKNAME, API.changeNickname);
export function* changeNameSaga() {
  yield takeLatest(CHANGENICKNAME, changeNicknameSaga);
}
const getUserInfoSaga = createRequestSaga(USERINFO, API.getUserInfo);
export function* getUserSaga() {
  yield takeLatest(USERINFO, getUserInfoSaga);
}

const initialState = {
  userImg: null,
  userAccount: null,
  userNickname: null,
  schoolAuth: null,
};

const myPage = handleActions(
  {
    [CHANGENICKNAME_SUCCESS]: (state) => ({
      ...state,
    }),
    [CHANGENICKNAME_FAILURE]: (state) => ({
      ...state,
    }),
    [USERINFO_SUCCESS]: (state, { payload }) => ({
      ...state,
      userNickname: payload.body.nickname,
      userAccount: payload.body.account,
      schoolAuth: payload.body.is_auth,
    }),
    [USERINFO_FAILURE]: (state) => ({
      ...state,
    }),
  },
  initialState
);

export default myPage;
