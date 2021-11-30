/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 80px;
  height: 1110px;
  padding: 40px 24px 91px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBlock = styled.div`
  width: 32px;
  height: 32px;
  margin: 20px 0;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenMenu = styled.div`
  width: 26px;
  height: 20px;
  margin: 0 3px 80px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideNavbar = () => {
  return (
    <div>
      <Nav>
        <OpenMenu>
          <img src="/asset/Vector.png" alt="Vector" />
        </OpenMenu>
        <ImgBlock>
          <img src="/asset/hashtag.png" alt="keyword" />
        </ImgBlock>
        <ImgBlock>
          <img src="/asset/archive.png" alt="history" />
        </ImgBlock>
        <ImgBlock>
          <img src="/asset/chat.png" alt="chat" />
        </ImgBlock>
        <ImgBlock>
          <img src="/asset/cog.png" alt="mypage" />
        </ImgBlock>
      </Nav>
    </div>
  );
};

export default SideNavbar;
