# 디렉토리 구조

## **server** 3layer architecture
**1. presentation 계층**  
일반 사용자가  application과 상호작용하는 application의 사용자 인터페이스 및 communication계층  
- 주요 목적 : 정보 표시, 사용자로부터 정보 수집  
- 이 최상위 레벨 계층은 예를 들어 웹 브라우저, 데스크탑 애플리케이션, 그래픽 사용자 인터페이스에서 실행 가능   

**2. application 계층(논리 계층, 중간 계층)**  
application의 핵심  
- 특정 비지니스 규칙 세트인 비지니스 논리 사용-> 프리젠테이션 계층에서 수집된 정보가 처리(경우에 따라 데이터 계층의 다른 정보와 관련하여 처리)  
- 데이터 계층의 데이터를 추가, 삭제, 수정 가능

**3. data계층**  
데이터베이스 계층, 데이터 액세스 계층, 백엔드라고 불림  
- application이 처리하는 정보가 저장 및 관리되는 곳  
- 이는 관계형 데이터 베이스 관리 시스템(예 : MySQL),  NoSQL 데이터베이스 서버(예: Cassandra,  CouchDB, MongoDB)일 수 있음.
- 3계층 application에는 모든 통신이 application계층을 통과함, presentation계층/data계층은 서로 간에 직접 통신 불가능!  

### express 기본 디렉토리 구조
( express-generator를 통해 쉽게 생성 가능)

- **/public**  
정적 파일들을 위한 폴더, 자바스크립트 파일, 이미지파일, CSS 등을 포함합니다. (화면에 보여주는데 필요한 리소스들)  

- **/routes**  
1. 라우터 모음, path와 유사한 폴더 구조를 가진다.
2. 서버에 요청이 들어올 때, URL의 path에 따라 필요한 controller로 **오로지 이어주는 역할만** 한다.
3.(기능 또는 서비스별 view의 위치)

- **/views**  
request 요청에 대한 로직을 처리한 후, client에 응답을 보낼 때, html 코드로 변환해서 반환하는 파일을 정의한 폴더! (esj, pug템플릿...?)

- **app.js**  
사이트에 대한 모든 정보가 들어있다.
post : 서버를 접속하기 위한 포트  
route정보 : 접속 url에 따른 서비스 호출  

- 웹 서비스 개발을 원활하게 하기 위한 폴더 구조 개선  
유지보수 등을 편하게 하기 위해 view파일과 route 파일을 1대1로 생성하고, 파일이름도 동일하게 명명하는게 좋다. 

---
#### 기능별로 정리한 디렉토리

>project/  
  ├── @types/  
  ├── config/  
  ├── logs/  
  ├── node_modules/  
  ├── public/  
  ├── src/    
  |       ├── constants/  
  |       ├── controllers/  
  |       ├── models/  
  |       ├── routes/  
  |       ├── repository/  
  |     ├── services/   
  |      ├── middlewares/   
  |       ├── utils/   
  |       └── app.js   
  ├── views/   
  └── .env   

---   
#### @types/ 
타입 정의 파일을 포함하는 디렉토리  
주로 외부 라이브러리의 타입 선언 파일이 위치
---
#### config/
**설정 파일**을 포함하는 **디렉토리**
- config는 설정이라는 의미로, 소프트웨어나 시스템이 동작하는 방식을 정의하는 매개변수들의 집합    
- github에 commit 되지 않도록  

#### .env
- **환경 변수**를 설정하는 **파일**
- 보통 시스템 레벨이나 프로세스 레벨에서 설정, application 실행 시간에 읽을 수 있는 변수  
- nodeJS module로 npm을 사용하여 설치하고, 사용할 수 있다(dotenv)  
- process.env.NAME과 같은 방법으로 접근  
- .env파일을 불러오는 코드는 코드의 최상단에 위치하도록  

##### config와 env의 차이점
1. config는 application 범위에 국한되어 사용되는 반면, env는 시스템 전반에 사용  
2. 환경변수는 민감한 정보를 application 코드 밖에 저장하는데 사용 되어 보안 강화, config는 코드 내부에 저장되기 때문에 민감한 정보 저장하기에 부적절  
3. 환경변수는 운영체제 또는 호스팅 환경에 따라 쉽게 변경될 수 있어 이식성이 높음/ 반면, config파일은 환경에 맞게 여러 버전을 관리!  

---

#### logs/
로그 파일을 저장하는 디렉토리
application log(기록!) or server log 관련 파일

#### node_modules/
프로젝트의 종속성인 nodeJS모듈이 설치되는 디렉토리
일반적으로 패키지 매니저가 이 디렉토리에 모듈을 설치

#### public/
정적파일(이미지, CSS, JavaScript등)이 위치하는 디렉토리  
웹서버에서 정적 파일을 제공할 때 사용됨
>  정적파일  
>- HTML을 제외하고 웹페이지를 렌더링할 때 필요한 추가 파일   
웹서버에 미리 저장되어있으로 css, image파일 같이 컨텐츠가 고정, 사용자의 요청에 따라 변하지 않는다.  
>- static : 개발자가 미리 준비한 데이터  
>- 반대되는 개념인 media : 사용자가 업로드한 데이터


---
### src/
소스코드를 포함하는 주요 디렉토리
- **constants** : 애플리케이션에서 사용되는 상수값을 정의하는 디렉토리

- **controllers** : *라우트에서 요청을 처리하는* **컨트롤러 함수**를 포함하는 디렉토리

- **models** : db 모델과 관련된 스키마를 정의

- **routes** : application의 엔드포인트와 관련된 라우트를 정의하는 디렉토리

- **repository** : db작업을 처리하는 repo파일을 포함하는 dir

- **services** : **비지니스로직**, 데이터처리와 관련된 **서비스 계층**을 포함하는 dir  
>**비지니스 로직** : 도출된 요구사항을 구현하기 위한 처리 로직  
> **서비스 계층** : **요청에 필요한 요구사항을 구현(데이터 연동)**  
>1. 하나의 페이지가 구현해야하는 기능 중 저수준의 데이터 처리로직(SQL수행)과 웹 고유의 기능(요청에 대한 응답, UI(사용자인터페이스)구현)을 분리하고, 이를 연결해주는 역할 수행  
>2. 데이터 베이스를 처리하는 코드를 모듈화 시키는 것이 서비스 계층의 취지  

- **middlewares** : 라우트 핸들러에 적용되는 미들웨어 함수를 포함하는 dir(인증, 로깅등과 같은 공통 기능 구현)
*라우트 핸들러를 사용하면 웹 요청 및 응답 API를 사용하여 지정된 경로에 대한 사용자 지정 요청 핸들러를 만들 수 있습니다.*

- **utils** : 재사용이 가능한 utility함수, 헬퍼 함수 등을 포함하는 dir(예 : 날짜계산, 주어진 객체가 배열인지)

- **app.js** : application의 진입전 파일, server 설정, 필요 middleware, route를 등록하는 역할
---
#### views : 서버측 렌더링을 위한 view템플릿 파일이 위치하는 dir
- 예 : express.js에서는 이 디렉토리에 ejs, pug와 같은 뷰엔진 템플릿 파일을 저장  
- 응답으로 보내줄 웹페이지 모양을 미리 만들어 표준화한 것 = 템플릿

### 내 expressRepo 폴더 구조
(추가될 가능성 낭낭함)

expressRepo  
│  
├── node_modules  
│     
├── src  
│   ├── app.js   
│   ├── public  
│   ├── routers   
│   ├── services  
│   ├── loader    
│   ├── models  
│   └── utils  
│  
├── .env  
├── .gitignore  
├── package_lock.json  
├── package.json  
└── readme.md    



#### 참고
[3layer architecture](https://nowgnas.github.io/posts/backendlayer/)

***[express 기본구조1](https://velog.io/@ldy290/nodejs-express-%EA%B8%B0%EB%B3%B8-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)***

[express 기본구조2](https://han-py.tistory.com/412)

**[Node.js 백엔드 디렉토리 구조_티스토리](https://close852.tistory.com/125)-타입**

[services 계층](https://chan-co.tistory.com/120#:~:text=Service%20%EA%B3%84%EC%B8%B5%EC%9D%80%20%ED%95%98%EB%82%98%EC%9D%98%20%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B0%80%20%EA%B5%AC%ED%98%84%ED%95%B4%EC%95%BC%20%ED%95%98%EB%8A%94%20%EA%B8%B0%EB%8A%A5%20%EC%A4%91,%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A5%BC%20%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94%20%EC%BD%94%EB%93%9C%EB%A5%BC%20%EB%AA%A8%EB%93%88%ED%99%94%20%EC%8B%9C%ED%82%A4%EB%8A%94%EA%B2%83%EC%9D%B4%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B3%84%EC%B8%B5%EC%9D%98%20%EC%B7%A8%EC%A7%80%EC%9D%B4%EB%8B%A4.)

[config, .env](https://techbless.github.io/2020/03/24/env%EC%99%80-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%EB%A5%BC-config%ED%8C%8C%EC%9D%BC%EB%B3%B4%EB%8B%A4-%EC%84%A0%ED%98%B8%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0%EC%99%80-undefined-%ED%95%B4%EA%B2%B0%EB%B2%95/)  

[config, .env의 차이점](https://velog.io/@thoon916/config%EC%99%80-env)

[ middlewares-라우트 핸들러](https://space-rumi.tistory.com/159)
[util](https://m.blog.naver.com/kim-stone/60189885716)

내일 목표 : async,await 공부+ js문법 복습 ! ! !