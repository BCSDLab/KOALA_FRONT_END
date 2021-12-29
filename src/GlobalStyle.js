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

`;
