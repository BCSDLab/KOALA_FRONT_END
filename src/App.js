import React from 'react';
// eslint-disable-next-line sort-imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNavbar from 'components/SideNavbar/SideNavbar';
import chatPage from 'pages/chatPage';
import historyPage from 'pages/historyPage';
import keywordPage from 'pages/keywordPage';
import myPage from 'pages/myPage';

const App = () => (
  <div className="Main">
    <BrowserRouter>
      <SideNavbar />
      <Routes>
        <Route path="/history" component={historyPage} exact />
        <Route path="/chat" component={chatPage} exact />
        <Route path="/keyword" component={keywordPage} exact />
        <Route path="/mypage" component={myPage} exact />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
