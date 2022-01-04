import axios from "axios";


const api = axios.create({
    baseURL:"https//api.stage.koala.im/v2/api-docs?group=2.0.0"
})


export const keywordApi = {
    inquiryKeyword : () => api.get('/keyword'),
    addKeyword : (keyword) => api.post('/keyword',{
        keyword
    }),
    changeKeyword : (keyword,keywordName) => api.put('/keyword',{
        keyword,
        keywordName
    }),
    deleteKeyword : (keywordName) => api.patch('/keyword',{
        keywordName
    }),
    keywordAllList : (keywordName) => api.get('/keyword/list',{
        keywordName
    }),
    deleteNotification : (noticeId) => api.patch('/keyword/list/notice',{
        noticeId
    }),
    readNotification : (noticeId) => api.patch('/keyword/list/notice/reading-check',{
        noticeId
    }),
    searchKeywordList : (keywordName,word) => api.get('/keyword/list/search',{
        keywordName,
        word
    }),
    getRecommendKeyword : (keyword) => api.get('/keyword/search',{
        keyword
    }),
    crawlingDataTest : (deviceToken) => api.get('/fcm/at-once',{
        deviceToken
    }),
    crawlingPushMessage : (deviceToken) => api.get('/fcm/keyword',{
        deviceToken
    })
}