import styled from 'styled-components';

export const SchoolAuthContent = styled.div`
  display: flex;
`;

export const SchoolAuthState = styled.div`
  height: 21px;
  flex-grow: 0;
  margin: 10px 165px 9px 80px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.colors.darkgray};
`;

export const SchoolAuthButton = styled.button`
  width: 100px;
  height: 40px;
  flex-grow: 0;
  background-color: ${(props) => props.theme.colors.darkgray};
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const StyledEditNickname = styled.form`
  display: flex;
  position: relative;
  width: 304px;
  height: 28.3px;
  margin: 2.8px 0px 24px 80px;
`;

export const EditNicknameInput = styled.input`
  width: 304px;
  padding-bottom: 7.3px;
  border: 0;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.silver};
`;

export const EditButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
`;

export const EditImg = styled.img`
  position: absolute;
  top: 0.9px;
  right: 0px;
`;

export const AutoLoginContent = styled.div`
  display: flex;
  width: 304px;
  height: 21px;
  margin: 0px 0px 32px 80px;
`;

export const AutoLoginTitle = styled.div`
  width: 65px;
  height: 21px;
  margin: 0px 0px 32px 0px;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.colors.gray};
`;

export const AutoLoginCheck = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 223px;
  padding-top: 2px;
  padding-bottom: 3px;
  object-fit: contain;
`;
