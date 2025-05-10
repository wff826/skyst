import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const redirectUri = 'http://localhost:5173/oauth/callback/kakao';

    console.log('[🔍 디버깅] 현재 URL:', window.location.href);
    console.log('[🔍 디버깅] 추출된 code:', code);
    console.log('[🔍 디버깅] redirectUri:', redirectUri);

    if (code) {
      console.log('[🚀 요청 시작] 백엔드로 POST 전송 준비 중...');
      axios.post('https://likelion-yonsei.shop/login', {
        code: code,
        redirectUri: redirectUri
      })
      .then((res) => {
        console.log('[✅ 응답 수신] 전체 응답:', res);
        const accessToken = res.headers['authorization'];
        const refreshToken = res.headers['refreshtoken'];

        console.log('[📦 저장] AccessToken:', accessToken);
        console.log('[📦 저장] RefreshToken:', refreshToken);

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        console.log('[➡️ 이동] 홈(/)으로 라우팅 중...');
        navigate('/');
      })
      .catch((err) => {
        console.error('[❌ 에러 발생] 로그인 실패:', err);
      });
    } else {
      console.warn('[⚠️ 경고] URL에 code 파라미터가 없습니다.');
    }
  }, [navigate]);

  return <div>로그인 중입니다...</div>;
};

export default KakaoCallback;
