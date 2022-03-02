const OAUTH_REDIRECT_URI = `${window.location.origin}/oAuth`;

export const GOOGLE = {
  OAUTH_URI: 'https://accounts.google.com/signin/oauth',
  CLIENT_ID: '980522844038-r9gh6mkeuckjkam93je731t98ptf1igl.apps.googleusercontent.com',
  REDIRECT_URI: `${OAUTH_REDIRECT_URI}/google`,
  SCOPE: 'https://www.googleapis.com/auth/userinfo.profile',
  getAuthUrl: () => {
    return `${GOOGLE.OAUTH_URI}?response_type=code&client_id=${GOOGLE.CLIENT_ID}&redirect_uri=${GOOGLE.REDIRECT_URI}&scope=${GOOGLE.SCOPE}`;
  },
};
export const NAVER = {
  OAUTH_URI: 'https://nid.naver.com/oauth2.0',
  CLIENT_ID: 'GDneoy5Vfi8rkjQVroIN',
  CLIENT_SECRET: 'DD3HIKV220',
  REDIRECT_URI: `${OAUTH_REDIRECT_URI}/naver`,
  getAuthUrl: () => {
    return `${NAVER.OAUTH_URI}/authorize?response_type=code&client_id=${NAVER.CLIENT_ID}&redirect_uri=${NAVER.REDIRECT_URI}`;
  },
};

export const KAKAO = {
  OAUTH_URI: 'https://kauth.kakao.com/oauth',
  CLIENT_ID: '0a08168dba45c265fba1b38c0aaf9d56',
  REDIRECT_URI: `${OAUTH_REDIRECT_URI}/kakao`,
  getAuthUrl: () => {
    return `${KAKAO.OAUTH_URI}/authorize?response_type=code&client_id=${KAKAO.CLIENT_ID}&redirect_uri=${KAKAO.REDIRECT_URI}`;
  },
};
