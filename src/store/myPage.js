import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';

const [CHANGENICKNAME, CHANGENICKNAME_SUCCESS, CHANGENICKNAME_FAILURE] =
  createRequestSagaActionTypes('myPage/CHANGENICKNAME');
const [USERINFO, USERINFO_SUCCESS, USERINFO_FAILURE] = createRequestSagaActionTypes('myPage/USERINFO');
const [CHANGE_PROFILE, CHANGE_PROFILE_SUCCESS, CHANGE_PROFILE_FAILURE] =
  createRequestSagaActionTypes('myPage/CHANGE_PROFILE');

export const changeNickname = createAction(CHANGENICKNAME, ({ nickName }) => ({
  nickName,
}));
export const getUserInfo = createAction(USERINFO);
export const changeProfile = createAction(CHANGE_PROFILE, (file) => file);

const changeNicknameSaga = createRequestSaga(CHANGENICKNAME, API.changeNickname);
export function* changeNameSaga() {
  yield takeLatest(CHANGENICKNAME, changeNicknameSaga);
}
const getUserInfoSaga = createRequestSaga(USERINFO, API.getUserInfo);
export function* getUserSaga() {
  yield takeLatest(USERINFO, getUserInfoSaga);
}
const changeProfileSaga = createRequestSaga(CHANGE_PROFILE, API.changeUserProfile);
export function* changeImageSaga() {
  yield takeLatest(CHANGE_PROFILE, changeProfileSaga);
}

const initialState = {
  userImg: null,
  userAccount: null,
  userNickname: null,
  isAuth: '0',
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
      isAuth: payload.body.is_auth,
      userImg: payload.body.profile,
    }),
    [USERINFO_FAILURE]: (state) => ({
      ...state,
    }),
    [CHANGE_PROFILE_SUCCESS]: (state, { payload }) => ({
      ...state,
      userImg: payload.body.profileUrl,
    }),
    [CHANGE_PROFILE_FAILURE]: (state) => ({
      ...state,
    }),
  },
  initialState
);

export default myPage;
