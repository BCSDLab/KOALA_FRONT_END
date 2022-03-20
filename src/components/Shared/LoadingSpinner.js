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

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${theme.colors.yellow};
  border-right: 2px solid ${theme.colors.yellow};
  border-bottom: 2px solid ${theme.colors.yellow};
  border-left: 8px solid ${theme.colors.yellow};
  background: transparent;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const LoadingSpinnerBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerBackground>
      <Spinner />
    </LoadingSpinnerBackground>
  );
};

export default LoadingSpinner;
