import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { keywordAPI } from 'api';

const [GET_SITE_RECOMMENDATION, GET_SITE_RECOMMENDATION_SUCCESS, GET_SITE_RECOMMENDATION_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/GET_SITE_RECOMMENDATION');
const [MODIFY_KEYWORD, MODIFY_KEYWORD_SUCCESS, MODIFY_KEYWORD_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/MODIFY_KEYWORD');
const [GET_KEYWORD_RECOMMENDATION, GET_KEYWORD_RECOMMENDATION_SUCCESS, GET_KEYWORD_RECOMMENDATION_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/GET_KEYWORD_RECOMMENDATION_FAILURE');
const [CREATE_KEYWORD, CREATE_KEYWORD_SUCCESS, CREATE_KEYWORD_FAILURE] =
  createRequestSagaActionTypes('createKeyword/CREATE_KEYWORD');

export const getSiteRecommendation = createAction(GET_SITE_RECOMMENDATION, (keyword) => keyword);

export const getKeywordRecommendation = createAction(GET_KEYWORD_RECOMMENDATION, (keyword) => keyword);

export const patchModifyKeyword = createAction(MODIFY_KEYWORD, (keywordName, object) => ({
  keywordName,
  object,
}));

const getKeywordSaga = createRequestSaga(GET_KEYWORD_RECOMMENDATION, keywordAPI.getKeywordRecommendation);
export function* getKeywordRecommendationSaga() {
  yield takeLatest(GET_KEYWORD_RECOMMENDATION, getKeywordSaga);
}

const getRecommendationSaga = createRequestSaga(GET_SITE_RECOMMENDATION, keywordAPI.getSiteRecommendation);
export function* getSiteRecommendationSaga() {
  yield takeLatest(GET_SITE_RECOMMENDATION, getRecommendationSaga);
}

const patchModifySaga = createRequestSaga(MODIFY_KEYWORD, keywordAPI.modifyKeyword);
export function* patchModifyKeywordSaga() {
  yield takeLatest(MODIFY_KEYWORD, patchModifySaga);
}

const initialState = {
  siteRecommendationList: [],
  keywordRecommendationList: [],
  getSiteRecommendationResponse: false,
  getKeywordRecommendationResponse: false,
  patchRecommendationResponse: false,
};

const modifyKeyword = handleActions(
  {
    [GET_SITE_RECOMMENDATION_SUCCESS]: (state, { payload: keyword }) => ({
      ...state,
      siteRecommendationList: keyword.body,
      getSiteRecommendationResponse: true,
    }),

    [GET_SITE_RECOMMENDATION_FAILURE]: (state) => ({
      ...state,
      getSiteRecommendationResponse: false,
    }),

    [MODIFY_KEYWORD_SUCCESS]: (state) => ({
      ...state,
      patchRecommendationResponse: true,
    }),
    [MODIFY_KEYWORD_FAILURE]: (state) => ({
      ...state,
      patchRecommendationResponse: false,
    }),
    [GET_KEYWORD_RECOMMENDATION_SUCCESS]: (state, { payload: keyword }) => ({
      ...state,
      keywordRecommendationList: keyword.body,
      getKeywordRecommendationResponse: true,
    }),
    [GET_KEYWORD_RECOMMENDATION_FAILURE]: (state) => ({
      ...state,
      getKeywordRecommendationResponse: false,
    }),
  },
  initialState
);

export default modifyKeyword;
