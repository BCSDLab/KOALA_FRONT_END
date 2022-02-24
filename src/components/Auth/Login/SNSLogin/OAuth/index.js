const OAUTH_REDIRECT_URI = `${window.location.origin}/user/oauth2/authorization`;

export const KAKAO = {
  OAUTH_URI: 'https://kauth.kakao.com/oauth',
  CLIENT_ID: '0a08168dba45c265fba1b38c0aaf9d56',
  REDIRECT_URI: `${OAUTH_REDIRECT_URI}/kakao`,
  getAuthUrl: () => {
    return `${KAKAO.OAUTH_URI}/authorize?response_type=code&client_id=${KAKAO.CLIENT_ID}&redirect_uri=${KAKAO.REDIRECT_URI}`;
  },
};

export const NAVER = {
  OAUTH_URI: 'https://nid.naver.com/oauth2.0',
  CLIENT_ID: 'GDneoy5Vfi8rkjQVroIN',
  REDIRECT_URI: `${OAUTH_REDIRECT_URI}/naver`,
  getAuthUrl: () => {
    return `${NAVER.OAUTH_URI}/authorize?response_type=code&client_id=${NAVER.CLIENT_ID}&redirect_uri=${NAVER.REDIRECT_URI}&state=k`;
  },
};
