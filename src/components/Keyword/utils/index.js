export const changeSiteName = (value) => {
    if(value === '아우누리'){
        return 'PORTAL';
    }else if(value === '아우미르'){
        return 'DORM';
    }else if(value === '유튜브'){
        return 'YOUTUBE';
    }else if(value === '페이스북'){
        return 'FACEBOOK';
    }
}

export const changeAlarmTerm = (value) => {
    switch(value){
        case 0 : return '5';
        case 1 : return '10';
        case 2 : return '15';
        case 3 : return '30';
        case 4 : return '60';
        case 5 : return '120';
        case 6 : return '240';
        default : return;
    }
}

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