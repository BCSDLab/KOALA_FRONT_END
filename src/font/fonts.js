import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "Medium";
        src: url(asset/fonts/Gluten-Bold.woff) format('woff');
        font-weight:500;
    }
`;

export default GlobalFonts;
