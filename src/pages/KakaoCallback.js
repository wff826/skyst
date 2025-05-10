import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    const redirectUri = 'http://localhost:3000/oauth/callback/kakao';

    console.log('[🔍 디버깅] 현재 URL:', window.location.href);
    console.log('[🔍 디버깅] 추출된 code:', code);
    console.log('[🔍 디버깅] redirectUri:', redirectUri);

    if (code) {
      console.log('[🚀 요청 시작] 백엔드로 POST 요청 중...');
      axios.post('https://likelion-yonsei.shop/login', {
        code,
        redirectUri,
      })
      .then((res) => {
        console.log('[✅ 응답 수신]', res);

        const accessToken = res.headers['authorization'];
        const refreshToken = res.headers['refreshtoken'];

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        console.log('[📦 저장 완료] accessToken:', accessToken);
        navigate('/home');
      })
      .catch((err) => {
        console.error('[❌ 요청 실패]', err);
      });
    } else {
      console.warn('[⚠️ 경고] URL에 code 파라미터가 없습니다.');
    }
  }, [navigate]);

  return <div>로그인 중입니다... (실제 백엔드)</div>;
};

export default KakaoCallback;
