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