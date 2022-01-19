import axios from 'axios';

const logined = axios.create({});

logined.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const guid = () => {
  var now = new Date().getTime();
  var dif = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //페이지 로드 이후 시간에서 마이크로초가 지원되지 않는 경우 0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var random = Math.random() * 16; //타임스탬프가 없어질때 까지 이를 생성
    if (now > 0) {
      random = (now + random) % 16 | 0;
      now = Math.floor(now / 16);
    } else {
      //마이크로초 지원 시 마이크로초 사용
      random = (dif + random) % 16 | 0;
      dif = Math.floor(dif / 16);
    }
    return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
};

export default logined;
