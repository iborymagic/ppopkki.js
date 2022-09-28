## 개발환경 구성
- vite는 엔트리를 `src/index.html`을 기준으로 빌드합니다.
- 빌드 결과물은 `<root>/dist` 폴더에 생성됩니다.

### 허스키 설치
- 커밋 전에 자동으로 빌드를 합니다.
```bash
npm set-script prepare "husky install"
npm run prepare
```
### 로컬 개발환경 설정 
- `npm run dev`

