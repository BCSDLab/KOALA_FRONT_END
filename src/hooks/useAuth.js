import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
/*
 * - useAuth
 * - 로그인이 정상적으로 이루어지지 않은 경우 isLoggedIn은 false가 된다.
 * - false인 상태에서 로그인 페이지를 벗어나게 되는 경우에 로그인 페이지로 돌아가게 된다.
 */
const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoggedIn === false) {
      navigate('/auth');
    }
  }, [auth.isLoggedIn]);
};

export default useAuth;
