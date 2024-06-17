---
layout: default
title: "[CR][Error] 예외처리"
date: 2024-06-17 18:54:58 +0900
categories: Refectoring
---

# AS-IS

```
// .fetch.ts (1차 함수)
const fetchDataBE = async ()=>{
    try{
        // my codes...
    }catch(error){
        throw new Error()
    }
}
```

```
// .useFetch.ts (1차 함수)
const useFetch = async (
    //my codes..
)=>{
    try{
        const response = await fetchDataBE()
        // my codes...
    }catch(error){
        throw new Error()
    }
}
```

- 현재 코드 구현상으로는 1차에서도 에러를 잡고, 2차에서도 에러를 잡습니다. 그러나 이 경우 useFetch 내부에서도 또다시 에러 처리를 해주어야 하고, useFetch를 사용한 컴포넌트에서 에러에 따른 ui를 만드는 것이 어렵습니다.

# TOBE

- 1차 함수에서 error를 try-catch하지 않고 2차 함수에서 잡는 식으로 코드를 수정할 예정입니다.
- 2차 함수에서 error를 다음과 같이 일괄 반환하여 error에 맞는 컴포넌트를 제작해 UI를 표시할 예정입니다.

```
error = {
    error: true,
    message: 'token'이 null|undefined 상태입니다.'
}
```

## Code Review Comment

- TOBE가 구현되면 생각해 볼 지점

```
리액트에서는 에러핸들링을 도와주기 위해서 ErrorBoundary 컴포넌트를 지원합니다. children에서 throw된 에러를 캐치해서 fallback ui를 노출하는 컴포넌트죠. 앱 전체에 하나의 ErrorBoundary를 사용하는 경우도 있지만, 컴포넌트의 각 성격에 맞는 ui를 노출하기 위해서는 에러가 발생할 가능성이 있는 컴포넌트에 각각 씌워줄수도 있습니다.

가장 중요한 점은 배포된 환경에서는 절대로 핸들링되지 않은 에러로 인해 서비스가 멈추는 경우를 만들어서는 안된다는 점입니다.
```
