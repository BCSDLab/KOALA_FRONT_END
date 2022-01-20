import axios from 'axios';

const logined = axios.create({});

logined.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setTokenOnHeader = (token) => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const uuid = () => {
  var timeStamp = new Date().getTime(); //타임스탬프
  var time = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //페이지 로드 이후 시간(마이크로초) || 지원되지 않는 경우 0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (count) {
    var random = Math.random() * 16; //랜덤의 0 ~ 16
    if (timeStamp > 0) {
      //타임스탬프 소진시 까지
      random = (timeStamp + random) % 16 | 0;
      timeStamp = Math.floor(timeStamp / 16);
    } else {
      //마이크로초가 지원되는 경우
      random = (time + random) % 16 | 0;
      time = Math.floor(time / 16);
    }
    return (count === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
};

export default logined;
