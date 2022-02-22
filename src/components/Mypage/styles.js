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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    height: 21px;
    margin: 9px 0 10px 0px;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    text-align: left;
    color: ${(props) => props.theme.colors.darkgray};
  }
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 100px;
    height: 40px;
    margin: 0 0 0 189px;
    padding: 10px 24px 9px;
    background-color:color: ${(props) => props.theme.colors.darkgray};
  }
`;

export const StyledEditNickname = styled.div`
  display: flex;
  position: relative;
  width: 304px;
  height: 28.3px;
  margin: 2.8px 0px 24px 80px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    margin: 0;
    width: 328px;
  }
`;

export const EditNicknameInput = styled.input`
  width: 304px;
  padding-bottom: 7.3px;
  border: 0;
  border-bottom: 1.5px solid ${(props) => (!props.error ? props.theme.colors.yellow : props.theme.colors.silver)};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 100%;
    border: 0;
    border-bottom: ${(props) => !props.error && `1px solid ${props.theme.colors.yellow}`};
    :focus-within {
      border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
    }
  }
`;

export const EditButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const EditImg = styled.img`
  position: absolute;
  top: 0.9px;
  right: 0px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 24px;
    height: 24px;
  }
`;

export const AutoLoginContent = styled.div`
  display: flex;
  width: 304px;
  height: 21px;
  margin: 0px 0px 32px 80px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    margin: 0;
    width: 100%;
    margin: 0px 0px 16px 0px;
  }
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
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 68px;
    height: 21px;
    margin: 0;
    font-family: NotoSansCJKKR;
    font-size: 14px;
    text-align: left;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;

export const AutoLoginCheck = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 223px;
  padding-top: 2px;
  padding-bottom: 3px;
  object-fit: contain;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    margin-left: 240px;
  }
`;
