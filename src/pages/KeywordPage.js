import React,{useState} from 'react';
import SideNavbar from 'components/SideNavbar';
import AddKeyword from 'components/Keyword/AddKeyword';
import KeywordHeader from 'components/Keyword/KeywordHeader';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
`;


const KeywordPage = () => {

  const [isToggle,setIsToggle] = useState(false);

  return (
    <Container>
      <SideNavbar/>
      <AddKeyword toggle={isToggle}/>
    </Container>
  );
};

export default KeywordPage;
