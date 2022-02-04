import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';

const [AUTH_UNIVERSITY, AUTH_UNIVERSITY_SUCCESS, AUTH_UNIVERSITY_FAILURE] =
  createRequestSagaActionTypes('chat/AUTH_UNIVERSITY');
const [SEND_UNIVERSITY, SEND_UNIVERSITY_SUCCESS, SEND_UNIVERSITY_FAILURE] =
  createRequestSagaActionTypes('chat/SEND_UNIVERSITY');

export const sendUniversity = createAction(SEND_UNIVERSITY, (email) => ({
  email,
}));

export const authUniversity = createAction(AUTH_UNIVERSITY, ({ email, secret }) => ({
  email,
  secret,
}));

const sendUniversitySaga = createRequestSaga(SEND_UNIVERSITY, API.sendUniversityEmail);
export function* sendSchoolSaga() {
  yield takeLatest(SEND_UNIVERSITY, sendUniversitySaga);
}
const authUniversitySaga = createRequestSaga(AUTH_UNIVERSITY, API.authUniversityEmail);
export function* authSchoolSaga() {
  yield takeLatest(AUTH_UNIVERSITY, authUniversitySaga);
}

const initialState = {
  emailErrorMessage: '',
  authNumberErrorMessage: '',
};

const chat = handleActions(
  {
    [SEND_UNIVERSITY_SUCCESS]: (state) => ({
      ...state,
      emailErrorMessage: '',
    }),
    [SEND_UNIVERSITY_FAILURE]: (state, { payload }) => ({
      ...state,
      emailErrorMessage: payload.errorMessage,
    }),
    [AUTH_UNIVERSITY_SUCCESS]: (state) => ({
      ...state,
      authNumberErrorMessage: '',
    }),
    [AUTH_UNIVERSITY_FAILURE]: (state, { payload }) => ({
      ...state,
      authNumberErrorMessage: payload.errorMessage,
    }),
  },
  initialState
);

export default chat;
