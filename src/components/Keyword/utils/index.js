export const getTitle = (url) => {
    if(url==="PORTAL"){
        return '아우누리'
    }else if(url==="DORM"){
        return '아우미르'
    }else{
        return '대신 전해드립니다 - koreatech'
    }
}


export const makeDeleteQuery = (startId,endId) => {
    
    let str = '';
    
    for (let i=startId;i<=endId;i++){
        if(i==startId){
            str+=`notice-id=${i}`;
        }
        str+=`&notice-id=${i}`;
    }
    return str;
}