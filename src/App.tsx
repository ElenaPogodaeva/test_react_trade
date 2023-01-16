import AuctionPage from 'pages/AuctionPage/AuctionPage';
import UserPage from 'pages/UserPage/UserPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuctionPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
