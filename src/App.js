import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavbar from 'components/SideNavbar';
import ChatPage from 'pages/ChatPage';
import HistoryPage from 'pages/HistoryPage';
import KeywordPage from 'pages/KeywordPage';
import MyPage from 'pages/MyPage';
import styled from 'styled-components';

const Main = styled.div``;

const App = () => (
  <Main>
    <SideNavbar />
    <Routes>
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/keyword" element={<KeywordPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  </Main>
);

export default App;
