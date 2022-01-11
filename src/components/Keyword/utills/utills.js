import { AUNURI,AOUMIR } from '../constant';

export const getTitle = (url) => {
    if(url.includes(AUNURI)){
        return '아우누리'
    }else if(url.includes(AOUMIR)){
        return '아우미르'
    }else{
        return '대신 전해드립니다 - koreatech'
    }
}