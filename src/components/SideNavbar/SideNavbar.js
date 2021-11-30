import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 80px;
  height: 1110px;
  padding: 40px 24px 91px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const SideNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <Nav>info</Nav>
    </div>
  );
};

export default SideNavbar;
