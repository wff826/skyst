import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    console.log('✅ 로그인 완료');
    console.log('AccessToken:', accessToken);
    console.log('RefreshToken:', refreshToken);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1> 로그인 성공!</h1>
      <p>환영합니다, 홈 페이지입니다.</p>
    </div>
  );
};

export default HomePage;
