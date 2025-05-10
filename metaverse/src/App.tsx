import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VirtualSpacePage from './pages/VirtualSpacePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VirtualSpacePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;