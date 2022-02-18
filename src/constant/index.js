export const CREATE_ACCOUNT = '/auth/createAccount';
export const LOGIN = '/auth';
export const UNIVERSITY_AUTH = '/chat/auth';
export const AUNURI = 'https://portal.koreatech.ac.kr';

export const REFRESH_TOKEN = 'refresh_token';

export const EMAIL_ERROR = '125';
export const NICKNAME_ERROR = '124';
export const ACCOUNT_ERROR = '123';
export const NOT_EXIST_ACCOUNT = '128';
export const NOT_MATCH_EMAIL = '143';
export const NOT_SEND_EMAIL = '144';
export const EXPIRE_AUTH_NUMBER = '139';
export const NOT_MATCH_SECRET = '140';

export const ALARM_TERM = [
  {
    id: 0,
    time: '5분',
  },
  {
    id: 1,
    time: '10분',
  },
  {
    id: 2,
    time: '15분',
  },
  {
    id: 3,
    time: '30분',
  },
  {
    id: 4,
    time: '1시간',
  },
  {
    id: 5,
    time: '2시간',
  },
  {
    id: 6,
    time: '4시간',
  },
];
export const EMAIL_REGEXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,4}$/i;
export const PASSWORD_REGEXP = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,18}$/;

// keywordPage 전용 constant
export const WEEK = [
  { id: 0, day: '월요일' },
  { id: 1, day: '화요일' },
  { id: 2, day: '수요일' },
  { id: 3, day: '목요일' },
  { id: 4, day: '금요일' },
  { id: 5, day: '토요일' },
  { id: 6, day: '일요일' },
  { id: 7, day: '공휴일' },
];

export const MEDIA_QUERIES = ['(max-width: 450px)', '(min-width: 800px)'];

export const MENU_ITEM = [
  {
    id: 0,
    title: '전체',
  },
  {
    id: 1,
    title: '아우누리',
  },
  {
    id: 2,
    title: '아우미르',
  },
  {
    id: 3,
    title: '대신 전해드립니다-koreatech',
  },
];
