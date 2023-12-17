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
(*) : await->잠시 실행이 중단되었다가 프라미스가 처리되면 실행이 재개됨!  
(이 때 프라미스 객체의 result값이 변수 result에 반환됨!)  

await는 promise.then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법입니다. promise.then보다 가독성 좋고 쓰기도 쉽습니다

> await는 최상위 레벨 코드에서 작동하지 않습니다.
