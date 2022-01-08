import { keywordAPI } from "api";
import { createAction,handleActions } from "redux-actions";
import createRequestSaga,{createRequestSagaActionTypes} from "./createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const [INQUIRY,INQUIRY_SUCCESS,INQUIRY_FAILURE] = createRequestSagaActionTypes("keyword/INQUIRY");
const [GETKEYWORDLIST,GETKEYWORDLIST_SUCCESS,GETKEYWORDLIST_FAILURE] = createRequestSagaActionTypes("keyword/GETKEYWORDLIST");
const [DELETEKEYWORDLIST,DELETEKEYWORDLIST_SUCCESS,DELETEKEYWORDLIST_FAILURE] = createRequestSagaActionTypes("keyword/DELETEKEYWORDLIST");
const [DELETEKEYWORDITEM,DELETEKEYWORDITEM_SUCCESS,DELETEKEYWORDITEM_FAILURE] = createRequestSagaActionTypes("keyword/DELETEKEYWORDITEM");

export const inquiry = createAction(INQUIRY);
export const getKeywordList = createAction(GETKEYWORDLIST);
export const deleteKeywordList = createAction(DELETEKEYWORDLIST,({startId,endId})=>({
    startId,
    endId,
}));
export const deleteKeywordItem = createAction(DELETEKEYWORDITEM,({id})=>({
    id,
}));


const inquirySaga = createRequestSaga(INQUIRY,keywordAPI.InquiryKeyword);
export function* inquiryKeywordSaga(){
    yield takeLatest(INQUIRY,inquirySaga);
}

const getListSaga = createRequestSaga(GETKEYWORDLIST,keywordAPI.getKeywordList);
export function* getKeywordListSaga(){
    yield takeLatest(GETKEYWORDLIST,getListSaga);
}

const deleteListSaga = createRequestSaga(DELETEKEYWORDLIST,keywordAPI.deleteKeywordList);
export function* deleteKeywordListSaga(){
    yield takeLatest(DELETEKEYWORDLIST,deleteListSaga);
}

const deleteItemSaga = createRequestSaga(DELETEKEYWORDITEM,keywordAPI.deleteKeywordItem);
export function* deleteKeywordItemSaga(){
    yield takeLatest(DELETEKEYWORDITEM,deleteItemSaga);
}

const initialState = {
    keywords:[],
    keywordList:[],
    inquiryResponse:false,
    getKeywordListResponse:false,
    deleteKeywordListResponse:false,
    deleteKeywordItemResponse:false
};


const keyword = handleActions(
    {
        [INQUIRY_SUCCESS] : (state, {payload:keyword}) => ({
            ...state,
            keywords : keyword.body,
            inquiryResponse : true
        }),
        [INQUIRY_FAILURE] : (state) => ({
            ...state,
            keywords : [],
            inquiryResponse:false
        }),

        [GETKEYWORDLIST_SUCCESS] : (state, {payload:keyword}) => ({
            ...state,
            keywordList:keyword.body,
            getKeywordListResponse:true
        }),

        [GETKEYWORDLIST_FAILURE] : (state) => ({
            ...state,
            keywordList:[],
            getKeywordListResponse:false
        }),

        [DELETEKEYWORDLIST_SUCCESS] : () => ({
            deleteKeywordList : true
        }),

        [DELETEKEYWORDLIST_FAILURE] : () => ({
            deleteKeywordList : false
        }),
        [DELETEKEYWORDITEM_SUCCESS] : () => ({
            deleteKeywordItem : true
        }),
        [DELETEKEYWORDITEM_SUCCESS] : () => ({
            deleteKeywordItem : false
        })
    },
    initialState
)

export default keyword;