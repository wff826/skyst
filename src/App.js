import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoCallback from './pages/KakaoCallback';
import KakaoLoginButton from './components/KakaoLoginButton';
import HomePage from './pages/HomePage'; 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KakaoLoginButton />} />
        <Route path="/oauth/callback/kakao" element={<KakaoCallback />} />
        <Route path="/home" element={<HomePage />} /> {/* 로그인 성공 후 이동 경로 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
