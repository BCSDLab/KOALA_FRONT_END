import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { keywordAPI } from 'api';
import keyword from './keyword';

const [GET_SITE_RECOMMENDATION, GET_SITE_RECOMMENDATION_SUCCESS, GET_SITE_RECOMMENDATION_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/GET_SITE_RECOMMENDATION');
const [MODIFY_KEYWORD, MODIFY_KEYWORD_SUCCESS, MODIFY_KEYWORD_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/MODIFY_KEYWORD');
const [GET_KEYWORD_RECOMMENDATION, GET_KEYWORD_RECOMMENDATION_SUCCESS, GET_KEYWORD_RECOMMENDATION_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/GET_KEYWORD_RECOMMENDATION_FAILURE');
const [GET_RECOMMENDATION_SITE, GET_RECOMMENDATION_SITE_SUCCESS, GET_RECOMMENDATION_SITE_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/GET_RECOMMENDATION_SITE');
const [DETAIL_KEYWORD, DETAIL_KEYWORD_SUCCESS, DETAIL_KEYWORD_FAILURE] =
  createRequestSagaActionTypes('modifyKeyword/DETAIL_KEYWORD');

const [CREATE_KEYWORD, CREATE_KEYWORD_SUCCESS, CREATE_KEYWORD_FAILURE] =
  createRequestSagaActionTypes('createKeyword/CREATE_KEYWORD');

export const getSiteRecommendation = createAction(GET_SITE_RECOMMENDATION, (keyword) => keyword);

export const getKeywordRecommendation = createAction(GET_KEYWORD_RECOMMENDATION, (keyword) => keyword);

export const patchModifyKeyword = createAction(MODIFY_KEYWORD, (keywordName, object) => ({
  keywordName,
  object,
}));

export const createKeyword = createAction(CREATE_KEYWORD, (object) => object);

export const getRecommendationSite = createAction(GET_RECOMMENDATION_SITE, keywordAPI.getRecommendationSite);
export const detailKeyword = createAction(DETAIL_KEYWORD, (keyword) => keyword);

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

const createSaga = createRequestSaga(CREATE_KEYWORD, keywordAPI.createKeyword);
export function* createKeywordSaga() {
  yield takeLatest(CREATE_KEYWORD, createSaga);
}

const getRecommendationSiteSaga = createRequestSaga(GET_RECOMMENDATION_SITE, keywordAPI.getRecommendationSite);
export function* getStarSiteSaga() {
  yield takeLatest(GET_RECOMMENDATION_SITE, getRecommendationSiteSaga);
}
const detailSaga = createRequestSaga(DETAIL_KEYWORD, keywordAPI.getKeywordDetailInfo);
export function* detailKeywordSaga() {
  yield takeLatest(DETAIL_KEYWORD, detailSaga);
}
const initialState = {
  siteRecommendationList: [],
  keywordRecommendationList: [],
  recommendationSiteList: [],
  keywordInfo: {},
  getSiteRecommendationResponse: false,
  getKeywordRecommendationResponse: false,
  patchRecommendationResponse: false,
  createKeywordResponse: false,
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
    [CREATE_KEYWORD_SUCCESS]: (state) => ({
      ...state,
      createKeywordResponse: true,
    }),
    [CREATE_KEYWORD_FAILURE]: (state) => ({
      ...state,
      createKeywordResponse: false,
    }),
    [GET_RECOMMENDATION_SITE_SUCCESS]: (state, { payload }) => ({
      ...state,
      recommendationSiteList: [...payload.body],
    }),
    [GET_RECOMMENDATION_SITE_FAILURE]: (state) => ({
      ...state,
    }),
    [DETAIL_KEYWORD_SUCCESS]: (state, { payload }) => ({
      ...state,
      keywordInfo: payload.body,
    }),
    [DETAIL_KEYWORD_FAILURE]: (state) => ({
      ...state,
    }),
  },
  initialState
);

export default modifyKeyword;
