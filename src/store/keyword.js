import { keywordAPI } from "api";
import { createAction,handleActions } from "redux-actions";
import createRequestSaga,{createRequestSagaActionTypes} from "./createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const [INQUIRY,INQUIRY_SUCCESS,INQUIRY_FAILURE] = createRequestSagaActionTypes("keyword/INQUIRY");

export const inquiry = createAction(INQUIRY);

const inquirySaga = createRequestSaga(INQUIRY,keywordAPI.InquiryKeyword);
export function* inquiryKeywordSaga(){
    yield takeLatest(INQUIRY,inquirySaga);
}

const initialState = {
    keywordList:[],
    inquiryResponse:null,
};


const keyword = handleActions(
    {
        [INQUIRY_SUCCESS] : (state, {payload:keyword}) => ({
            ...state,
            keywordList : keyword.body,
            inquiryResponse : true
        }),
        [INQUIRY_FAILURE] : (state,{payload:error}) => ({
            ...state,
            keywordList : false
        })
    },
    initialState
)

export default keyword;