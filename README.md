# 🔐 Kakao Login Frontend

카카오 로그인을 연동한 React 기반 로그인 시스템입니다.  
mock 서버와 실서버를 통한 두 가지 방식의 로그인 흐름을 구현하고 테스트하였습니다.

---

## 🗂️ 브랜치 구조

| 브랜치명 | 설명 |
|----------|------|
| `main` | 배포/운영 가능한 최종 코드 |
| `feature/kakao-login-mock` | mock 서버 기반 카카오 로그인 테스트용 |
| `feature/kakao-login-live` | 실제 백엔드 연동 및 인가 코드 전달 구현 |

---

## ✅ 기능 요약

### 1. 카카오 로그인 버튼
- 카카오 OAuth 인증 페이지로 리다이렉션
- 성공 시 인가 코드 포함하여 콜백 URI로 리턴

### 2. `/oauth/callback/kakao` 페이지 처리
- 인가 코드 추출 후 백엔드로 POST 전송
- 백엔드 응답에서 JWT 토큰 추출
- 토큰을 localStorage에 저장
- 저장 후 `/home` 페이지로 navigate

### 3. `/home` 페이지
- 로그인 성공 후 진입
- 저장된 accessToken, refreshToken을 console에 출력

---

## 🧪 Mock 테스트 흐름 (json-server 활용)

- `mock.json` 파일을 통해 local 서버에서 테스트 가능
- 실행 명령:
  ```bash
  json-server --watch mock.json --port 4001
