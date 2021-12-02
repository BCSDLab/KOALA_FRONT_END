import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavbar from 'components/SideNavbar/SideNavbar';
import ChatPage from 'pages/ChatPage';
import HistoryPage from 'pages/HistoryPage';
import KeywordPage from 'pages/KeywordPage';
import MyPage from 'pages/MyPage';

const App = () => (
  <div className="Main">
    <SideNavbar />
    <Routes>
      <Route path="/history" component={HistoryPage} />
      <Route path="/chat" component={ChatPage} />
      <Route path="/keyword" component={KeywordPage} />
      <Route path="/mypage" component={MyPage} />
    </Routes>
  </div>
);

export default App;
