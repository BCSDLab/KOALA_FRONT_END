import { historyAPI } from "api";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga,{createRequestSagaActionTypes} from "./createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const [GETHISTORYLIST, GETHISTORYLIST_SUCCESS, GETHISTORYLIST_FAILURE] = createRequestSagaActionTypes("history/GETHISTORYLIST");
const [DELETEHISTORYLIST, DELETEHISTORYLIST_SUCCESS, DELETEHISTORYLIST_FAILURE] = createRequestSagaActionTypes("history/DELETEHISTORYLIST");
const [READHISTRORYITEM, READHISTRORYITEM_SUCCESS, READHISTRORYITEM_FAILURE] = createRequestSagaActionTypes("history/READHISTORYITEM");

export const getHistoryList = createAction(GETHISTORYLIST, (pageNum) => (pageNum));
export const deleteHistoryList = createAction(DELETEHISTORYLIST, (historyList) => (historyList));
export const readHistoryList = createAction(READHISTRORYITEM, (noticeId) => (noticeId));

const getHistorySaga = createRequestSaga(GETHISTORYLIST, historyAPI.getHistoryList);
export function* getHistoryListSaga(){
    yield takeLatest(GETHISTORYLIST, getHistorySaga);
}

const deleteHistorySaga = createRequestSaga(DELETEHISTORYLIST, historyAPI.deleteHistoryList);
export function* deleteHistoryListSaga(){
    yield takeLatest(DELETEHISTORYLIST, deleteHistorySaga);
}

const readHistorySaga = createRequestSaga(READHISTRORYITEM, historyAPI.readHistoryItem);
export function* readHistoryItemSaga(){
    yield takeLatest(READHISTRORYITEM, readHistorySaga);
}

const initialState = {
    historyList: [],
    getHistoryListResponse: false,
    deleteHistoryResponse: false,
    readHistoryItemResponse: false
};

const history = handleActions(
    {
        [GETHISTORYLIST_SUCCESS]: (state, {payload:history}) => ({
            ...state,
            historyList: history.body,
            getHistoryListResponse: true
        }),
        [GETHISTORYLIST_FAILURE]: (state) => ({
            ...state,
            historyList: [],
            getHistoryListResponse: false
        }),

        [DELETEHISTORYLIST_SUCCESS]: () => ({
            deleteHistoryResponse: true
        }),
        [DELETEHISTORYLIST_FAILURE]: () => ({
            deleteHistoryResponse: false
        }),

        [READHISTRORYITEM_SUCCESS]: () => ({
            readHistoryItemResponse: true
        }),
        [READHISTRORYITEM_FAILURE]: () => ({
            readHistoryItemResponse: false
        })
    },
    initialState
)

export default history;


