### 요약
---

1. function 앞에 async 키워드를 추가하면  
   함수는 언제나 프라미스를 반환합니다.  
   함수 안에서 await을 사용할 수 있습니다.

2. 프라미스 앞에 await 키워드가 붙으면 js는 프라미스가 처리될 때까지 대기합니다.  
    처리 완료시 : 에러 발생/미발생 동작 중 하나가 이어짐.

---

## awiat
js는 await 키워드를 만나면 프라미스가 처리될 때까지 기다립니다. 결과는 그 이후에 반환됩니다.  
```JavaScript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // (*)

  alert(result); // "완료!"
}

f();// 함수 호출! 
```
> (*) : await->잠시 실행이 중단되었다가 프라미스가 처리되면 실행이 재개됨!  
> (이 때 프라미스 객체의 result값이 변수 result에 반환됨!)  

- await는 promise.then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법입니다. promise.then보다 가독성 좋고 쓰기도 쉽습니다

- await는 최상위 레벨 코드에서 작동하지 않습니다.  
하지만 익명 async함수로 코드를 감싸면 최상위 레벨 코드에도 await 사용 가능!  
```JavaScript
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
```

## 에러 핸들링
프라미스가 정상적으로 이행 : await promise는 프라미스 객체의 result에 저장된 값을 반환  
프라미스가 거부 : throw문을 작성한 것처럼 에러가 던져짐  
```JavaScript
async function f() {
  await Promise.reject(new Error("에러 발생!"));
  //throw new Error("에러 발생!"); 윗줄과 동일한 코드
}
```

실제 상황에서는 프라미스가 거부 되기 전에 약간의 시간이 지체되는 경우(O)  
-> 이런 경우 **await가 에러를 던지기 전에** 지연이 발생  
-> await가 던진 에러는 throw가 던진 에러를 잡을 때처럼 **try..catch**를 사용해 잡을 수 있습니다.  
->에러 발생 : 제어 흐름이 catch 블록으로 이동
-> try..catch가 없으면 아래 예시의 async함수f()을 호출하여 만든 프라미스가 거부 상태가 됨, f()에 .catch를 추가하면 거부된 프라미스 처리 가능
```JavaScript
async function f() {
  await Promise.reject(new Error("에러 발생!"));
  //throw new Error("에러 발생!"); 윗줄과 동일한 코드
}
```