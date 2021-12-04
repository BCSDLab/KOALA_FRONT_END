import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 348px;
  height: 48px;
  border: none;
  flex-grow: 0;
  padding-left: 16px;
  margin-top: 16px;
  border: solid 1px #c4c4c4;
  &:focus {
    border: solid 1px #222;
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #222;
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const AutoLogin = styled.div`
  width: 368px;
  display: flex;
  margin-top: 8px;
`;

export const AutoLoginCheck = styled.div`
  width: 22px;
  height: 12px;
  margin-right: 4px;
  font-size: 10px;
`;

export const AutoLoginText = styled.div`
  width: 58px;
  height: 18px;
  font-size: 9px;
`;

export const OtherOption = styled.div`
  width: 368px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-top: 16px;
`;

export const SnsLoginText = styled.div`
  width: 152px;
  height: 18px;
  font-size: 10px;
  margin: 28px 108px 16px 108px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OauthLogin = styled.div`
  width: 155px;
  margin: 0 108px 0 108px;
  display: flex;
  justify-content: space-between;
`;

export const NoneUser = styled.div`
  width: 120px;
  height: 21px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 56px 123px 221px 125px;
`;

export const CopyRight = styled.div`
  width: 298px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px 0 30px;
`;
