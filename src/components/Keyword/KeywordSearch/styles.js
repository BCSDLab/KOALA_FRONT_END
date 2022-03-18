import styled from 'styled-components';
import theme from '../../../theme';

const { tabletL, mobileS } = theme.deviceSizes;

export const MobileSearchWrapper = styled.div`
  width: 90%;
  min-width: ${mobileS};
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
`;
export const SearchInput = styled.input`
  width: 665px;
  padding: 8px;
  border: none;
  background-color: #eeeeee;
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    padding: 0 0 0 8px;
    height: 40px;
  }
  @media (min-width: ${(props) => props.theme.deviceSizes.tabletL}) and (max-width: ${(props) =>
      props.theme.deviceSizes.NoteBook}) {
    width: 260px;
  }
`;

export const SearchButton = styled.button`
  width: 101px;
  height: 34px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #222222;
  color: #ffffff;
  @media screen and (max-width: ${tabletL}) {
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
  }
`;

export const SearchImage = styled.img`
  margin-left: 8px;
  @media screen and (max-width: ${tabletL}) {
    margin: 0;
    padding: 0;
  }
`;
