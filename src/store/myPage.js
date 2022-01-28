import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';

const [CHANGE_NICKNAME, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE] =
  createRequestSagaActionTypes('myPage/CHANGE_NICKNAME');
const [USERINFO, USERINFO_SUCCESS, USERINFO_FAILURE] = createRequestSagaActionTypes('myPage/USERINFO');
const [CHANGE_PROFILE, CHANGE_PROFILE_SUCCESS, CHANGE_PROFILE_FAILURE] =
  createRequestSagaActionTypes('myPage/CHANGE_PROFILE');
const RESET_MYPAGE_STATE = {
  type: 'RESET_MYPAGE_STATE',
};

export const resetMypageInfo = createAction(RESET_MYPAGE_STATE);
export const changingNickname = createAction(CHANGE_NICKNAME, (nickname) => nickname);
export const getUserInfo = createAction(USERINFO);
export const changeProfile = createAction(CHANGE_PROFILE, (file) => file);

const changeNicknameSaga = createRequestSaga(CHANGE_NICKNAME, API.changeNickname);
export function* changeNameSaga() {
  yield takeLatest(CHANGE_NICKNAME, changeNicknameSaga);
}
const getUserInfoSaga = createRequestSaga(USERINFO, API.getUserInfo);
export function* getUserSaga() {
  yield takeLatest(USERINFO, getUserInfoSaga);
  yield takeLatest(CHANGE_NICKNAME_SUCCESS, getUserInfoSaga);
}
const changeProfileSaga = createRequestSaga(CHANGE_PROFILE, API.changeUserProfile);
export function* changeImageSaga() {
  yield takeLatest(CHANGE_PROFILE, changeProfileSaga);
}

const initialState = {
  changeSuccess: true,
  userImg: null,
  userAccount: null,
  userNickname: null,
  userType: '',
  isAuth: '0',
};

const myPage = handleActions(
  {
    [RESET_MYPAGE_STATE]: (state) => ({
      ...(state = initialState),
    }),
    [CHANGE_NICKNAME_SUCCESS]: (state) => ({
      ...state,
      changeSuccess: true,
    }),
    [CHANGE_NICKNAME_FAILURE]: (state) => ({
      ...state,
      changeSuccess: false,
    }),
    [USERINFO_SUCCESS]: (state, { payload }) => ({
      ...state,
      userNickname: payload.body.nickname,
      userAccount: payload.body.account,
      isAuth: payload.body.is_auth,
      userImg: payload.body.profile,
      userType: payload.body.user_type,
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
