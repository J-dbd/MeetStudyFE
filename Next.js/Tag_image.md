## `<Image>`

### Largest Contentful Paint (LCP)

``
Image with src "/\_next/static/media/1. landing-01.bd28d690.png" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/image#priority

```
Largest Contentful Paint (LCP)로 감지된 이미지에 priority 속성을 추가하면 중요한 이미지가 우선적으로 로드된다. 기본적으로 큰 사진은 느리게 로드되는데 레이지 로딩이 적용되면 안 되는 큰 '의미가 큰 이미지'는 해당 속성을 추가하여 지연 로딩을 방지한다.

Next.js가 스스로 '의미가 큰' 이미지임을 감지하여 경고한 것. Above the fold는 페이지를 로드할 때 사용자가 스크롤을 하지 않아도 처음에 보이는 영역을 의미한다. 이 영역의 이미지는 페이지 로드 시 즉시 표기되기 떄문에 중요하며 빠르게 로드되어야 한다.
```

Image with src "/\_next/static/media/1. landing-01.bd28d690.png" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes

```

```
