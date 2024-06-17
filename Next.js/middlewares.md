## `middleware`

### 문제 1: 다음 경로를 잡지 못한다?

```
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("🤠미들 웨어의 코드가 실행되었습니다.");
  if (req.nextUrl.pathname.startsWith("contact")) {
    let res = NextResponse.next();
    res.cookies.set("test", "1");

    return NextResponse.redirect("/test/dev");
  }
  //return NextResponse.redirect(new URL('/landing', req.url))
}

export const config = {
  matcher: "/",
};

```

req.nextUrl.pathname 을 했는데도 테스트 코드가 먹히지 않았다. 무엇이 문제지?

#### 시도: pathname 조건문 변경

- 그러나 여전히 '/' 에서 이동할 때에만 터미널에 찍힘.

#### 시도: config 설정을 변경

```
export const config = {
  matcher: "/:path*",
};
```

결과

```
GET / 200 in 329ms
🤠미들 웨어의 코드가 실행되었습니다.
🤠미들웨어의 경로? /_next/static/css/app/layout.css
🤠미들 웨어의 코드가 실행되었습니다.
🤠미들웨어의 경로? /_next/static/chunks/webpack.js
```

##### 분석

- middleware 본문을 보니 middleware.ts가 실행되기 전 next.config.js에서 먼저 한번 필터링하는 것 같다. 그래서 '/' 일때에는, 즉, '/' 일 때에만 middleware 의 함수가 실행되어서 터미널에 출력이 된 것 같다.

```
headers from next.config.js
redirects from next.config.js
Middleware (rewrites, redirects, etc.)
beforeFiles (rewrites) from next.config.js
Filesystem routes (public/, _next/static/, pages/, app/, etc.)
afterFiles (rewrites) from next.config.js
Dynamic Routes (/blog/[slug])
fallback (rewrites) from next.config.js
There are two ways to define which paths Middlewar
```

##### 확인

다시 한번 문서를 보니 그것이 맞았다. 그리고, middleware는 서버가 request를 받을 때, 딱 한 번 실행된다. 또한 `NextRequest.nextUrl`은 url의 extended 버전으로, 처음 생각했던 '다음으로 보내는 경로' 가 아니었다.

req.nextUrl.pathname은 요청된 URL의 경로(path)를 나타낸다. 클라이언트가 서버에 요청을 보낼 때, 요청된 URL에서 도메인 이름과 쿼리 문자열을 제외한 부분이다.
