export const setCookie = (name, value, options = {}) => {
  let date = new Date();
  date.setDate(date.getDate() + options);
  let Cookie = `${name}=${value};Expires=${date.toUTCString()}`;
  document.cookie = Cookie;
};

export const getCookie = (name) => {
  let value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return value ? value[2] : null;
};

export const removeCookie = (name) => {
  let date = new Date();
  date.setDate(date.getDate() - 100);
  let Cookie = `${name}=;Expires=${date.toUTCString()}`;
  document.cookie = Cookie;
};
