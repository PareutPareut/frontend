## 라우팅 소개
라우팅은 url(또는 경로) 및 특정한 http 요청 메소드(get, post 등)인 특정 엔드포인트에 대한 **클라이언트의요청**에 **응답하는 방법을 결정**하는 것을 말합니다.

- ENDPOINT : API가 서버에서 리소스에 접근할 수 있도록 가능하게 하는 URL  
- API : 두 시스템(application)이 상호작용할 수 있게 하는 프로토콜의 총집합(프로그램 상호작용을 도와주는 매개체)

```JavaScript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```
홈페이지에서 Hello World!로 응답

## 라우트
### 기본적인 라우트의 예
```JavaScript
import express from 'express';
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```
### 라우트 메소드
- 라우트 메소드는 HTTP 메소드 중 하나로 부터 파생되며, express클래스의 인스턴스에 연결됨  
```JavaScript
// GET method route
app.get('/', function (req, res) {
  res.send('get요청에 대한 응답');
});

// POST method route
app.post('/', function (req, res) {
  res.send('post요청에 대한 응답');
});
```
- client에서 서버로 요청을 보낼 때 ***사용한 HTTP 요청 메소드에 맞는*** **express 라우터 메소드로 처리**된다.  
(만약 client에서 get을 사용하여 ***HTTP요청 메소드를 서버로 req하면***, express 라우트 메소드 **역시 get으로 되어 있어야 연결**된다.)  
- 어떤 주소를 사용하여 서버로 요청을 보낼 때, HTTP 요청 메소드로 get을 사용하느냐, post를 사용하느냐에 따라 호출되는 express 라우터가 달라진다.
---
(웹 서버 개발시 가장 많이 사용하는 express 라우트)
1. GET: getting data
2. POST: creating data
3. PUT: updating data
4. DELETE: deleting data  
- **app.all()** :
어떠한 http메소드로부터 파생되지 않음, 이 메소드는 모든 요청 메소드에 대해 한 경로에서 미들웨어 함수를 로드하는데 사용됨.  
---

### 라우트 경로
요청(req)메소드와의 조합을 통해, 요청이 이루어질 수 있는 엔드포인트를 정의  
(문자열, 문자열 패턴 또는 정규식  )  

1. 라우터 주소에는 정규식을 비롯한 **특수한 패턴** 사용 가능  
주의 : 다양한 라우터를 아우르는 와일드 카드 역할-> 일반 라우터보다 뒤에 위치해야!!  
```JavaScript
router.get('/user/:id', (res,req)=>{
  console.log(req.params, req,query);
});
```
:id에 해당하는 것을 조회 가능하며 req.param객체 안에 들어있음 (예 : user/1, user/123)  
:id이면 req.params.id로,  
:type이면 req.params.type로 조회 가능

2. 주소에 쿼리 스트링  
쿼리 스트링의 키-값 정보는 req.query 객체 안에 존재  

3.

- 문자열 기반

- 문자열 패턴을 기반
1. 다음의 라우트 경로는 abcd, abbcd 및 abbbcd 등과 일치합니다.
```JavaScript
app.get('/ab+cd', function(req, res)=>{
    res.send('ab+cd);
})
```
2. /ab+cd 경로를 /ab*cd -> 라우트 경로는 abcd, abxcd, abRABDOMcd 및 ab123cd 등과 일치합니다.  
3. /ab+cd 경로를 /ab(cd)?e 경로를 ->/abe 및 /abcde와 일치

- 정규식 기반
1. 다음의 라우트 경로는 라우트 이름에 “a”가 포함된 모든 항목과 일치합니다.
```JavaScript
app.get(/a/, function(req, res) {
  res.send('/a/');
});
```
2. 다음의 라우트 경로는 butterfly 및 dragonfly와 일치하지만, butterflyman 및 dragonfly man 등과 일치하지 않습니다.  
```JavaScript
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});
```

### 라우트 핸들러
- 미들웨어와 비슷하게 작동하는 **여러 콜백 함수**를 제공하여 요청을 처리할 수 있습니다.   
- 유일한 차이점: 이런 콜백은 **next('route')를 호출**하여 **나머지 라우트 콜백을 우회**할 수 있다!
*(->이러한 매커니즘을 이용하면 라우트에 대한 사전 조건을 지정한 후, 현재의 라우트를 계속할 이유가 없는 경우에는 제어를 후속 라우트에 전달할 수 있습니다.)*

- 라우터 핸들러의 형태 : 함수, 함수 배열의 형태, 혹은 앞의 둘을 조합한 형태  

1. 하나의 콜백 함수
```JavaScript
app.get('/example/a', function(req,res){
    res.send('hello from a!');
});
```

2. 2개 이상의 콜백 함수(next 오브젝트를 반드시 지정해야함!)  
```JavaScript
app.get('/example/b', function(req,res,next){
    console,log('the response will be sent by the next function ...');
    next();
}, function(req, res){
    res.send('hello from b!);
});
```

3. 하나의 콜백 함수 **배열**
```JavaScript
let callback1 = (req,res,next)=>{
  console.log('callback 1임.');
  next();
}

let callback2 = (req,res,next)=>{
  console.log('callback 2임.');
  next();
}

let callback3 = (req,res)=>{
  res.send('callback 3임, next()없음');
}

app.get('/example/c', [callback1,callback2,callback3]);

```

4. 독립적인 함수 + 함수 배열의 조합
```JavaScript
let callback1 = (req,res,next)=>{
  console.log('callback 1임.');
  next();
}

let callback2 = (req,res,next)=>{
  console.log('callback 2임.');
  next();
}

app.get('/example/c', [callback1,callback2], (req, res, next)=>{
  console.log('나 next호출할거고, 다음 콜백 함수로 넘길거임.');
  next();
}, (req, res)=>{
  res.send('배열과 함수의 조합~');
});
```

### 응답 메소드
- 다음 표에 표시된 응답 오브젝트에 대한 메소드(res)는 **응답을 client로 전송**, **요청~응답 주기를 종료**할 수 있습니다.    
- 라우터 핸들러로부터 다음 메소드 중 어느 하나도 호출되지 않는 경우, client요청은 정지된 채로 방치됩니다.

---
- res.download() : 파일이 다운로드 되도록 프롬포트합니다.
- *res.end() : 응답 프로세스를 종료합니다.*
- *res.json() : json 응답을 전송합니다.*
- res.jsonp() : JSONP지원을 통해 json응답을 전송합니다.
- *res.redirect() : 요청의 경로를 재지정합니다.*
- res.render() : 보기 템플리트를 렌더링 합니다.
- *res.send() : 다양한 유형의 응답을 전송합니다.*
- res.sendFile() : 파일을 옥텟스트림의 형태로 전송합니다.
- res.sendStatus() : 응답 상태 코드를 설정한 후, 해당 코드를 문자열로 표현한 내용을 응답 본문으로서 전송합니다.   
---

### app.route()
- app.route()를 이용하면 라우트 경로에 대하여 **체인 가능한** 라우트 핸들러를 작성할 수 있습니다.  
- **경로는 한 곳에 지정**되어 있으므로, 모듈식 라우트를 작성하면 중복성과 오타가 감소하여 도움!  

app.route()를 사용하여 정의된 체인 라우트 핸들러의 예  
```JavaScript
app.route('/book')
  .get((req,res)=>{
    res.send('갖고와 데이타')
  })
  .post((req,res)=>{
    res.send('생성해 데이타')
  })
  .put((res,req)=>{
    res.send('업데이트해 데이타')
  })
```
### express.Router
express.router()를 사용하여 라우터를 모듈로서 작성  
이렇게 하는 이유? : (라우팅을 깔끔하게 관리 가능) 라우터를 많이 연결하면 app.js코드가 매우 길어지므로 express에는 라우터를 분리할 수 있는 방법을 제공
```JavaScript
import express from 'express';
const router = express.Router();

//middleware that is specific to this router
router.use(function timelog(req, res, next){
  console.log('Time :', Date.now());
  next();
});

//define the home page route
router.get('/', (req,res)=>{
  res.send('Birds home page');
};

//define the about route
router.get('/about', (req,res)=>{
  res.send('About 새');
})

export default router; // 라우터를 모듈로 만든다.

```
최상위 파일인 app.js에서는 각각의 라우터 모듈을 임포트해와 각 경로에 use로 연결해주면 된다. 

```JavaScript
import birds from './birds';
...
app.use('/birds', birds); //라우팅 미들웨어 사용
```
---
##### 참고
1. 라우팅 : https://expressjs.com/ko/guide/routing.html 에서 이해가 어려운 부분은 아래 링크를 참조하였습니다.
2. 라우팅 소개 : https://expressjs.com/ko/starter/basic-routing.html  
3. API, ENDPOINT : https://blog.naver.com/ghdalswl77/222401162545  
4. 라우트 메소드 https://sancheck-developer.tistory.com/25  
5. get, post, put, delete 정의 : https://syoung-journey.tistory.com/30
6. Router객체로 라우팅 분리하기 : https://velog.io/@younoah/nodejs-express-route-router

- 내일 목표 : 오늘 학습한 router 공부 복습,  router, services 파일의 존재 이유에 대해 알아보기 +다른 파일들의 존재 이유
---