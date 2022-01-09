import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansCJKKR';
    font-weight: normal;
    font-style: normal;
    src: url(asset/fonts/NotoSansCJKkr/NotoSansCJKkr-Regular.otf) format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKKR';
    font-weight: 500;
    font-style: normal;
    src: url(asset/fonts/NotoSansCJKkr/NotoSansCJKkr-Medium.otf) format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKKR';
    font-weight: bold;
    font-style: normal;
    src: url(asset/fonts/NotoSansCJKkr/NotoSansCJKkr-Bold.otf) format('opentype');
  }
  
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: normal; 
    font-style: normal;
    src: url(asset/fonts/NotoSansKR/NotoSansKR-Regular.woff) format('woff');
  }
  @font-face {
      font-family: 'NotoSansKR';
      font-weight: 500;
      font-style: normal;
      src: url(asset/fonts/NotoSansKR/NotoSansKR-Medium.woff) format('woff');
  }

  @font-face {
    font-family: 'NanumSquareRound';
    font-weight: bold;
    font-style: normal;
    src: url(asset/fonts/other/NanumSquareRoundOTFB.otf) format('opentype');
}


  html, body, #root{
    font-family: 'NotoSansCJKKR', 'Noto Sans KR', 'Noto Sans', sans-serif;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  /* reset */
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,form,fieldset,p,button{margin:0;padding:0}
  body,h1,h2,h3,h4,input,button,select,option{font-family: 'NotoSansCJKKR'; font-size:14px; color:${(props) =>
    props.theme.colors.darkgray};}
  body{background-color:${(props) => props.theme.colors.white};*word-break:break-all;-ms-word-break:break-all}
  img,fieldset,iframe{border:0 none}
  li{list-style:none}
  input,select,button{appearance:none; -webkit-appearance:none; vertical-align:bottom; outline:none;}
  img{vertical-align:top}
  i,em,address{font-style:normal}
  label,button{cursor:pointer}
  button{border:0;margin:0;padding:0;outline:0;}
  a{color:${(props) => props.theme.colors.darkgray};text-decoration:none; cursor: pointer;}
  a:hover{color: ${(props) => props.theme.colors.darkgray}; text-decoration:none}
  button *{position:relative}
  legend{*width:0}
  input::-ms-clear{display:none}
  input[type="text"]{ font-size: 14px; color: ${(props) => props.theme.colors.darkgray};}
  input[type="radio"], input[type="checkbox"] {display: none;opacity: 0;}
  ::-webkit-input-placeholder{color:${(props) => props.theme.colors.gray}; font-size:14px;}
  :-ms-input-placeholder{color:${(props) => props.theme.colors.gray}; font-size:14px;}
  ::placeholder{color:${(props) => props.theme.colors.gray}; font-size:14px;}
`;
