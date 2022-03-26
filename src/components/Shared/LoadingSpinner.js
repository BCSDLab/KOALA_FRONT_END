import styled, { keyframes } from 'styled-components';
import theme from 'theme';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border: ${theme.colors.yellow} solid;
  border-width: 2px 2px 2px 8px;
  background: transparent;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export default LoadingSpinner;
