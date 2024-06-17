# 랜더링 과정

## 1. SSR(서버 사이드 랜더링)

1. Next.js가 서버에서 HTML을 생성합니다.
2. `RootLayout`컴포넌트가 비동기적으로 실행됩니다.
3. `initializeStoreWithTokens`함수 내부의 `getDesignToken` 함수가 실행됩니다.
4. `getDesignToken` 함수는 캐시여부를 따진 후, 캐시된 데이터가 없다면 `token.json`을 읽고 JSON을 파싱하여 디자인 토큰을 가져옵니다.
5. `initializeStoreWithTokens` 함수도 store의 캐시여부를 따진 후, 캐시된 데이터가 없다면 store를 재생성하여 디자인 토큰을 `Redux`상태에 설정한 스토어를 반환합니다.
6. 5에서 반환한 스토어에서 token 값을 가져와 CSS 변수 문자열 `settingTokenIntoHTML` 내부에 디자인 토큰의 값을 저장합니다.
7. `<head>` 태그 안 `<style>`태그에 문자열이 포함됩니다.
8. HTML이 완성되어 클라이언트로 전송됩니다.

## 2. CSR(클라이언트 사이드 랜더링)

1. 서버에서 전송된 HTML을 브라우저가 로드하여 랜더링합니다.
2. 이때 서버에서 함꼐 전송된 CSS, `globals.css`가 그려집니다. 해당 파일의 css값이 적용됩니다.
3. 동시에 `<head>`태그에 포함된 `<style>`태그가 적용됩니다. `settingTokenIntoHTML`의 css값, 즉 디자인 토큰에서 설정한 값이 CSS변수 값으로 덮어씌워집니다.
4. `<StoreProvider>` 컴포넌트를 통해 5에서 반환한 스토더의 상태를 전달합니다. 그 결과 디자인 토큰의 값이 클라이언트 컴포넌트가 모두 접근할 수 있는 전역 상태로 제공됩니다.
