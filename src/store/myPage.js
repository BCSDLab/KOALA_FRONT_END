import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';

const [CHANGENICKNAME, CHANGENICKNAME_SUCCESS, CHANGENICKNAME_FAILURE] =
  createRequestSagaActionTypes('myPage/CHANGENICKNAME');
const [USERINFO, USERINFO_SUCCESS, USERINFO_FAILURE] = createRequestSagaActionTypes('myPage/USERINFO');

export const changeNickName = createAction(CHANGENICKNAME, ({ nickName }) => ({
  nickName,
}));
export const getUserInfo = createAction(USERINFO);

const changeNickNameSaga = createRequestSaga(CHANGENICKNAME, API.changeNickName);
export function* changeNameSaga() {
  yield takeLatest(CHANGENICKNAME, changeNickNameSaga);
}
const getUserInfoSaga = createRequestSaga(USERINFO, API.getUserInfo);
export function* getUserSaga() {
  yield takeLatest(USERINFO, getUserInfoSaga);
}

const initialState = {
  userImg: null,
  userNickName: 'uko05068',
  schoolAuth: false,
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
      userNickName: payload.nickName,
      /* 
        UserImg : ~~,
        schoolAuth : ~~,
      */
    }),
    [USERINFO_FAILURE]: (state) => ({
      ...state,
    }),
  },
  initialState
);

export default myPage;
