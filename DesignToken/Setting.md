# Design Token 사용하기

## `serverComponent`와 `clientComponet`에서 Design Token 설정하기

App router를 사용하는 Next.js에서 모든 HTML을 그릴 때 기반이 되는 `app/layout`에서 글로벌 CSS와 design token을 사용할만한 요소들(색상, 폰트 크기 등)을 로드하고 세팅합니다.

## `token.json`

```json
{
  "colors": {
    "primary": "#FFFFFF",
    "secondary": "#ff4081"
  },
  "sizes": {
    "container": "1600px",
    "warpper": "1000px",
    "fontBase": "16px",
    "padding": "10px 20px"
  }
}
```

색상코드나 글자 크기, 화면 크기 등을 세팅해둡니다. 통일성을 유지하고 중앙에서 한 번만 바꿀 수 있도록 하기 위함입니다.

## `/app.globals.css`

```css
:root {
  /* setting default variables */
  --color-primary: #0070f3;
  --color-secondary: #ff4081;
  --container: 1600px;
  --warpper: 1000px;
  --font-base: 16px;
  --padding: 10px 20px;
}
/* 생략 */
```

`token.json`에서 세팅해둘 값들을 미리 css 변수화로 선언해줍니다. css는 선언과 정의가 분리되지 않았습니다. 즉, 후일 `var(--color-primary)` 형태로 css 를 사용하려면 미리 위의 코드와 같이 값이 존재하는 채로 정의해주어야 합니다.

그 외 모든 HTML 파일에서 css적으로 불변할 요소들(`margin:auto`와 같은 것들)을 해당 파일에서 설정해둡니다.

# 시도 과정

1. 서버에서 Redux로 client에 전달해주는 방식: 전역 css로 사용될 수 있어서 폐기
