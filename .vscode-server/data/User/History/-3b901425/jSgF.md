### 가독성이 더 좋은 코드
- 좋은 예시 : 중첩 레벨을 줄여 코드의 가독성을 높이기  

```JavaScript
function pow(x, n) {
  if (n < 0) {
    alert("'n'은 음수가 될 수 없습니다.");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

```JavaScript
for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  ...  // <- 추가 중첩 레벨이 추가되지 않습니다.
}
```

- 나쁜 예시  
```JavaScript
function pow(x, n) {
  if (n < 0) {
    alert("'n'은 음수가 될 수 없습니다.");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}
```

### 코드를 먼저, 함수는 그 다음에 선언하기 ( 대신 이름을 잘 지어야.. )
이름만 보고도 헬퍼 함수의 역할을 쉽게 유추할 수 있게 헬퍼 함수 이름을 명명했다면 함수 본문을 읽을 필요도 없습니다.  

### 주석
주석에 들어가면 좋은 내용
> 1. 고차원 수준 아키텍처  
> 2. 함수 용례  
> 3. 당장 봐서는 명확해 보이지 않는 해결 방법에 대한 설명  

## 에러 핸들링
async,await에서 부족하다고 생각이 들어 다시보는 에러 핸들링..  
(아마 또 다시 보지 않을까? 자주 보자구 에러얌~)  

### try..catch와 에러핸들링
try {…} 블록 안에서 에러가 발생해도 catch에서 에러를 처리하기 때문에 **스크립트는 죽지 않습니다.**    
#### try..catch는 오직 런타임 에러(=에러)에만 동작!!  
실행 가능한(runnable) 코드, 즉 유효한 js코드에만 동작  

---
 **js엔진은 코드를 읽고 난 후 코드를 실행!!**  
- 코드를 읽는 중 발생하는 에러는 '**parse-time에러**'라고 부름, 엔진은 이해 못해서 코드 안에서 복구XXX
>- try..catch는 동기적으로 동작, 즉 setTimeout처럼 scheduled 코드에서 발생한 예외는 못잡는다. (왜냐면 setTime에 넘겨진 익명 함수는 엔진이 try..catch를 **떠난 이후에 실행**되기 때문에)
>- 이 예외를 잡으려면 반드시 **함수 내부**에 구현해야함  
```JavaScript
setTimeout(function() {
  try {
    noSuchVariable; // 이제 try..catch에서 에러를 핸들링 할 수 있습니다!
  } catch {
    alert( "에러를 잡았습니다!" );
  }
}, 1000);
```
---

### 에러 객체
에러가 발생하면 js는 **에러 상세내용이 담긴 객체**를 생성 **->** catch블록에 이 객체를 **인수로 전달**!  
```JavaScript
try {
  lalala; // 에러, 변수가 정의되지 않음!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)

  // 에러 전체를 보여줄 수도 있습니다.
  // 이때, 에러 객체는 "name: message" 형태의 문자열로 변환됩니다.
  alert(err); // ReferenceError: lalala is not defined
}
```
- **내장 에러** 전체와 **에러 객체**는 두 가지 주요 프로퍼티를 가짐
1. name(에러 이름)  
만약 정의되지 않은 변수 때문에 발생한 에러라면 "ReferenceError"가 이름이 됨.  
2.message(에러 상세 내용을 담는 문자 메세지)  
- 3. stack(현재 호출 스텍)  
에러를 유발한 중첩 호출들의 순서 정보를 가진 문자열  
디버깅 목적으로 사용  

### 직접 에러를 만들어서 던지기  
json이 문법적으로 잘못되지는 않았지만, 스크립트 내에서 사용 중인 필수 프로퍼티 name을 가지고 있지 않는다면?  
다음은 정상적으로 JSON.parse가 실행, 그러나 name이 없는건 err를 유발하는 상황  
**throw연산자를 이용하여 에러처리를 통합하자!!**  
```JavaScript
let json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음
  alert( user.name ); // 이름이 없습니다!

} catch (e) {
  alert( "실행되지 않습니다." );
}
```
### throw연산자는 에러를 생성한다.
```JavaScript
throw <error obj>
```
**에러 객체에 name과 message 프로퍼티를 넣어주는 것을 권장**  

#### js는 Error, SyntaxError, ReferenceError, TypeError등의 표준 에러 객체 관련 생성자를 지원 -> 이 **내장 생성자**들을 이용하여 err 객체 생성 가능!  
```JavaScript
let error = new Error(message);
let error = new SyntaxError(message);
let error = new ReferenceError(message);
```
1. *위와 같이 일반객체가 아닌* **내장 생성자**를 사용해 만든 **내장 에러 객체**의 name 프로퍼티는 생성자의 이름과 동일한 값을 갖는다.  
- 프로퍼티 message의 값은 인수에서 가져옴.  
```JavaScript
let error = new Error("나는 에러 메세지가 된당!");

alert(error.name); // Error
alert(error.message); // 나는 에러 메세지가 된당!
```
2. **잘못된 데이터**를 받았을 때, JSON.parse는 어떤 종류의 에러를 만들까?  
name프로퍼티가 없는 경우
```JavaScript
try {
  JSON.parse("{ 잘못된 형식의 json o_O }");
} catch(e) {
  alert(e.name); // SyntaxError
  alert(e.message); // Unexpected token b in JSON at position 2
}
```
- throw 연산자를 통해 에러 던지기  
```JavaScript
let json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: 불완전한 데이터: 이름 없음
}
```
(*) : throw연산자는 message를 이용해 syntaxError를 생성  
(에러 생성 방식은 자바스크립트가 자체적으로 에러를 생성하는 방식과 동일)  

### 에러 '다시' 던지기
또 다른 예기치 않은 에러가 try {...} 블록 안에서 발생 할 수도!!!  
```JavaScript
let json = '{ "age": 30 }'; // 불완전한 데이터

try {
  user = JSON.parse(json); // <-- user 앞에 let을 붙이는 걸 잊었네요.

  // ...
} catch(err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (실제론 JSON Error가 아닙니다.)
}
```
catch는 예상치 못한 에러를 잡긴 함, 그치만 **종류에 상관없이 JSON Error 메세지를** 보여줌**->** 디버깅을 어렵게 만든다! **->** 다시 던지기 기술 필요!!  

**catch는 알고 있는 에러만 처리하고 나머지는 다시 던져야 합니다!**  
다시 던지기 기술

### 커스텀 에러와 에러 확장



#### 참고
[코어자바스크립트-코딩 스타일](https://ko.javascript.info/coding-style)