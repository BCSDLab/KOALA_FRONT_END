export const KAKAO_CLIENT_ID = '0a08168dba45c265fba1b38c0aaf9d56';
export const KAKAO_REDIRECT_URI = 'http://localhost:8080/user/oauth2/authorization/kakao';

// export const KAKAO_REDIRECT_URI = 'https://api.stage.koala.im/user/oauth2/authorization/kakao';

export const NAVER_CLIENT_ID = 'GDneoy5Vfi8rkjQVroIN';
export const NAVER_REDIRECT_URI = 'http://localhost:8080/user/oauth2/authorization/naver';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?&response_type=code&redirect_uri=${KAKAO_REDIRECT_URI}&client_id=${KAKAO_CLIENT_ID}`;

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&response_type=code`;
