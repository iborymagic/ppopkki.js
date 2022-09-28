## Demo

https://iborymagic.github.com/ppopkki.js

## 개발환경 구성
- vite는 엔트리를 `src/index.html`을 기준으로 빌드합니다.
- 빌드 결과물은 `<root>/dist` 폴더에 생성됩니다.
- 현재는 수동으로 빌드하고 `main` 브랜치로 푸시를 해야 합니다.

### 허스키 설치
- 커밋 전에 자동으로 빌드를 합니다.
```bash
npm set-script prepare "husky install"
npm run prepare
```

### 정적 에셋 연결
- assets 폴더에 있는 컨텐츠에 접근하려면 `./~~.jpg` 로 import 하면 됩니다. (프러덕션 빌드에서 자동으로 앞에 폴더 prefix가 붙음)
  - https://vitejs.dev/guide/assets.html 

### 로컬 개발환경 설정 
- `npm run dev` # 로컬에서 개발 테스트
- `npm run build` #
- `npm run preview` # 깃허브에 배포하기 전에 테스트 (빌드 필요)

