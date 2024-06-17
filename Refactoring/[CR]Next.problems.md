# Problems

## `fabicon.ico`

```
/public
 - favicon.ico

/app
 - favicon.ico
```

두 곳에 같이 존새할 시 favicon.ico 이 500으로 실패합니다. public에 있는 파일을 삭제하면 정상적으로 실행됩니다.

### 그런데 왜 내 화면엔 보이지 않았을까?

- favicon.ico는 한번 성공할 시 next-cache에 남아서 그런 듯 싶다. 로컬에서는 .next폴더를 삭제하고 다시 next run dev를 하면 될 것.
