import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from 'components/Shared/Cookies';
import { setTokenOnHeader } from 'api/logined';
import * as authAPI from 'api';

function* setToken(action) {
  setCookie('refresh_token', action.payload.body.refresh_token, {
    path: '/',
  });
  setTokenOnHeader(action.payload.body.access_token);
}

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FALIURE] = createRequestSagaActionTypes('auth/SIGNUP');
const [GUEST, GUEST_SUCCESS, GUEST_FALIURE] = createRequestSagaActionTypes('auth/GUEST');

export const login = createAction(LOGIN, ({ deviceToken, account, password }) => ({
  deviceToken,
  account,
  password,
}));
export const refresh = createAction(REFRESH);
export const signUp = createAction(SIGNUP, ({ account, password, find_email, nickName }) => ({
  account,
  password,
  find_email,
  nickName,
}));
export const nonMemberLogin = createAction(GUEST, ({ deviceToken }) => ({
  deviceToken,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGIN_SUCCESS, setToken);
}
const refreshSaga = createRequestSaga(REFRESH, authAPI.refresh);
export function* refreshLoginSaga() {
  yield takeLatest(REFRESH, refreshSaga);
  yield takeLatest(REFRESH_SUCCESS, setToken);
}
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);
export function* signUpRegisterSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
}
const nonMemberSaga = createRequestSaga(GUEST, authAPI.nonMember);
export function* nonLoginSaga() {
  yield takeLatest(GUEST, nonMemberSaga);
  yield takeLatest(GUEST_SUCCESS, setToken);
}

const initialState = {
  isOpen: false,
  isLoggedIn: null,
  authError: null,
  errorCode: '',
};

const auth = handleActions(
  {
    [LOGIN]: (state) => ({
      ...state,
      isLoggedIn: null,
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state) => ({
      ...state,
      authError: null,
      isLoggedIn: true,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      isLoggedIn: false,
    }),
    [REFRESH_SUCCESS]: (state) => ({
      ...state,
      authError: null,
      isLoggedIn: true,
    }),
    [REFRESH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      isLoggedIn: false,
    }),
    [SIGNUP_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      errorCode: '',
    }),
    [SIGNUP_FALIURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
    }),
    [GUEST]: (state) => ({
      ...state,
      isLoggedIn: null,
      authError: null,
    }),
    [GUEST_SUCCESS]: (state) => ({
      ...state,
      isLoggedIn: true,
    }),
    [GUEST_FALIURE]: (state, { payload: error }) => ({
      ...state,
      authError: error.code,
      isLoggedIn: false,
    }),
  },
  initialState
);

export default auth;
