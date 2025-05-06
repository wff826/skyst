import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('[🧪 MOCK 테스트 시작] axios 요청 중...');

    // ✅ 조건문 없이 무조건 실행
    axios.get('http://localhost:4001/login')
      .then((res) => {
        console.log('[✅ MOCK 응답 수신]', res.data);

        const accessToken = res.data.authorization;
        const refreshToken = res.data.refreshToken;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        console.log('[📦 저장 완료] accessToken:', accessToken);
        navigate('/home');
      })
      .catch((err) => {
        console.error('[❌ MOCK 요청 실패]', err);
      });
  }, [navigate]);

  return <div>로그인 중입니다... (mock)</div>;
};

export default KakaoCallback;
