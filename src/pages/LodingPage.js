import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Button from 'components/Shared/Button';
import LoadingSpinner from 'components/Shared/LoadingSpinner';

const LoadingBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NavigateLoginButton = styled(Button)`
  width: 200px;
`;

const LoadingPage = () => {
  const navigate = useNavigate();
  const onClickAuth = () => {
    navigate('/auth');
  };

  return (
    <LoadingBackground>
      <LoadingSpinner />
      <h1>혹시 로그인을 하지 않으셨나요?</h1>
      <NavigateLoginButton onClick={onClickAuth}>로그인 하러가기</NavigateLoginButton>
    </LoadingBackground>
  );
};

export default LoadingPage;
