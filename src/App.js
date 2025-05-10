import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VoiceRecordingPage from './pages/VoiceRecordingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VoiceRecordingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
