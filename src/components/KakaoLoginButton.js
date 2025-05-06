import React from 'react';

const KAKAO_REST_API_KEY = '90667b555f7cee12aa381be1d24a87e5';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';

const KakaoLoginButton = () => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>로그인 페이지</h1>
      <a href={kakaoAuthUrl}>
        <img 
          src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png" 
          alt="카카오 로그인" 
        />
      </a>
    </div>
  );
};

export default KakaoLoginButton;
