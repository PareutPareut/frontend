# promise
1. 제작 코드(producing code): 원격에서 script를 불러오는 것과 같은 시간이 걸리는 일  
2. 소비코드(consuming code) : 제작코드의 결과를 기다렸다가 이를 소비  
3. promise : promise는 시간이 얼마나 걸리든 상관없이 약속한 결과를 만들어내는 제작코드가 준비되었을 때 모든 소비 코드가 결과를 사용할 수 있도록 해줍니다.  
---
### 제작 코드
```JavaScript  
let promise = new Promise(function(resolve, reject) {  
  // executor
});  
``` 
- executor(new Promise에 전달되는 함수)는 new Promise가 만들어질 때까지 자동으로 실행, 결과를 최종적으로 만들어내는 제작코드를 포함합니다.  
- new Promise 생성자가 **반환하는 promise객체**는 다음과 같은 **내부 프로퍼티**를 갖습니다.  
**1. state** : 처음엔 pending(보류)-> resolve가 호출되면 **"fulfilled"**, reject가 호출되면 **"rejected"**  
**2. result** : 처음엔 undefined-> resolve(value)가 호출되면 **value**로, reject(error)가 호출되면 **error**로 변합니다.  
- 프라미스는 fulfilled/reject 둘 중 **하나만** 합니다. 이때 변경된 상태는 **더 이상 변하지 않습니다.**  
```JavaScript  
let promise = new Promise(function(resolve, reject) {  
  resolve("완료");  
  
  reject(new Error("…")); // 무시됨  
  setTimeout(() => resolve("…")); // 무시됨  
});   
``` 
---
### 소비코드 : then, catch, finally
> **처리된 프라미스의 핸들러는 즉각 실행**  
프라미스가 pending(대기)상태->.then/catch/finally 핸들러는 처리되길 기다림  
반면, promise가 처리 상태라면 핸들러가 즉각 실행 
#### .then
```JavaScript  
let promise = new Promise(function(resolve, reject) {  
  setTimeout(() => resolve("완료!"), 1000);  
});  
  
// resolve 함수는 .then의 첫 번째 함수(인수)를 실행합니다.  
promise.then(  
  result => alert(result), // 1초 후 "완료!"를 출력  
  error => alert(error) // 실행되지 않음  
);   
``` 
#### catch  
- **에러가 발생한 경우만** 다루고 싶다면 **.then(null, errorHandlingFunction)** 같이 null을 첫 번째 인수로 전달 or **.catch(errorHandlingFunction)**  
*( .catch(f)는 문법이 간결하다는 점만 빼고 .then(null,f)과 완벽하게 동일 )*
```JavaScript  
let promise = new Promise((resolve, reject) => {  
  setTimeout(() => reject(new Error("에러 발생!")), 1000);  
});  

promise.catch(alert); // 1초 뒤 "Error: 에러 발생!" 출력  
```  
#### finally
- 프라미스 처리시 f가 항상 실행된다는 점에서만 -> **.finally(f)** 호출은  **.then(f, f)** 과 *유사하지만,* 
1. **finally핸들러에는 인수가 없습니다.** finally에서는 프라미스가 *이행되었는지 거부되었는지* 알 수 없습니다.  
2. finally 핸들러는 **자동으로 다음 핸들러에 결과와 에러를 전달**!   
result-> **(finally를 거쳐)**-> then까지 전달 
```JavaScript  
new Promise((resolve, reject) => {  
  setTimeout(() => resolve("결과"), 2000)  
})  
  .finally(() => alert("프라미스가 준비되었습니다."))  
  .then(result => alert(result)); // <-- .then에서 result를 다룰 수 있음  
``` 
*output : 프라미스가 준비되었습니다. / 결과*

--- 

### 프라미스 체이닝   
- 비동기 처리  
- **.then 또는 .catch, .finally의 핸들러**가 **프라미스를 반환**하면, 나머지 체인은 프라미스가 처리될 때까지 **대기**
- 처리 완료 : 프라미스의 result가 다음 체인으로 전달  

프라미스 체이닝이 가능한 이유 :   
promise.then을 호출->promise가 반환  
반환된 promise에는 당연히 .then호출 가능, 한편 핸들러가 값을 반환할 때엔 이 값이 promise의 result가 됨, 따라서 .then은 이 값을 이용해 호출됨.  

- **thenable**
handler는 promise가 아닌 thenable이라 불리는 객체를 반환하기도, .then이라는 메서드를 가진 객체는 모두 thenable객체라고 부르는데, 이 객체는 **promise와 같은 방식으로** 처리됨.  
```JavaScript  
class Thenable {  
  constructor(num) {  
    this.num = num;  
  }  
  then(resolve, reject) {  
    alert(resolve); // function() { 네이티브 코드 }   
    // 1초 후 this.num*2와 함께 이행됨  
    setTimeout(() => resolve(this.num * 2), 1000); // (**)  
  }  
}  
  
new Promise(resolve => resolve(1))  
  .then(result => {  
    return new Thenable(result); // (*)
  })  
  .then(alert); // 1000밀리 초 후 2를 보여줌    
``` 
(*) : then 핸들러가 반환한 객체 확인, 이 객체에 호출 가능한 매서드 then이 있으면 then이 호출됨, then은 executor과 유사하게 동작  

### promise &error handling 

# async , await  
프라미스를 더 편하게 사용하는 방법  

### async  
async function 형태의 함수는 **반드시 프라미스를 반환**  
프라미스가 아닌 것은 프라미스로 감싸 반환   
```JavaScript  
async function f() {  
  return 1;  
  //return Promise.resolve(1); 명시적으로 프라미스 반환하는 방법  
}  
  
f().then(alert); // 1  
``` 
### await  
await 키워드는 **async 함수 안에서만** 동작, 프라미스가 **처리될 때까지 대기** 후 결과 반환  
await는 promise.then보다 프라미스의 result 값을 얻을 때 귣.
```JavaScript  
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 처리될 때까지 함수 실행을 기다림

  alert(result); // "완료!"
}

f();
``` 
- await는 최상위 레벨 코드에서 작동하지 않습니다만~ 익명 async 함수로 코드를 감싸면 가능합니다.  
```JavaScript  
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
``` 

- await는 ‘thenable’ 객체를 받습니다.  

- async 클래스 메서드  
async 메서드와 async 함수는 프라미스를 반환하고 await를 사용할 수 있다는 점에서 동일  
```JavaScript  
class Waiter {  
  async wait() {  
    return await Promise.resolve(1);  
  }  
}  
  
new Waiter()  
  .wait()  
  .then(alert); // 1  
```  

### 에러 핸들링
프라미스 이행 : await promise는 프라미스 객체의 result에 저장된 값을 반환  
**프라미스 거부 : throw문을 작성한 것 처럼 에러가 던져짐**  
아래 두 코드는 동일!  
```JavaScript  
async function f() {
  await Promise.reject(new Error("에러 발생!"));
}
```   
```JavaScript  
async function f() {
  throw new Error("에러 발생!");
}
```  
- 실제 상황 : promise가 거부되기 전에 약간의 시간 지체-> await이 에러를 던지기 전에 지연 발생  
- await이 err는 throw가 던진 err를 잡을 때처럼 try..catch를 사용해 잡을 수 있음  
```JavaScript  
async function f() {  
  
  try {  
    let response = await fetch('http://유효하지-않은-주소');  
    let user = await response.json();  
  } catch(err) {  
    // fetch와 response.json에서 발행한 에러 모두를 여기서 잡습니다.  
    alert(err);  
  }  
}  
  
f();  
```  
- try..catch가 없으면 아래 예시의 async함수 f()를 호출해 만든 프라미스가 거부 상태가 됨 -> f()에 .catch를 추가 ->rejected된 프라미스 처리 가능! 
-문법 제약 때문에 async함수 바깥의 최상위 레벨 코드에선 await를 사용할 수 없음-> 관행처럼 .then/catch를 추가해 최종 결과나 처리되지 못한 에러 처리(*)   
```JavaScript  
async function f() {
  let response = await fetch('http://유효하지-않은-주소');
}

// f()는 거부 상태의 프라미스가 됨->f()에 .catch를 추가->처리
f().catch(alert); // TypeError: failed to fetch // 
```  
- Promise.all & async/await 
여러 개의 promise 처리되길 기다려야 하는 상황 -> promise를 Promise.all로 감싸고, 여기에 await을 붙여 사용!  
- 실패한 promise의 err->Promise.all로 전파, err때문에 생긴 예외->try..catch로 잡을 수 있음  
```JavaScript  
// 프라미스 처리 결과가 담긴 배열을 기다립니다.
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
``` 

