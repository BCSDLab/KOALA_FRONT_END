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