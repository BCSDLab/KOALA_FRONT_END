import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 61px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  max-width: 120px;
  white-space: nowrap;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.tabletL}) {
  }
`;
