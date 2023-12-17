# html   
(Hypertext Markup Language,하이퍼텍스트 마크업 언어)  
**요소**는 웹페이지를 구성, 데이터 항목, 텍스트 한 묶음, 이미지를 **담을 수 있고**, 아무것도 담지 않을 수도 있습니다.  
일반적인 요소는 여는 태그와 몇 가지 특성, 내부의 텍스트 콘텐츠, 닫는 태그로 구성  

**태그** : 요소를 생성하기 위해 사용됨, ( ```<p>```시작 태그, ```</p>``` 종료 태그의 p는 HTML 단락 요소의 이름)  
html, head, body
```html
<!doctype html>  
<html>  
  <head>  
    <meta charset="utf-8" />  
    <title>My test page</title>  
  </head>  
  <body>  
    <p>This is my page</p>  
  </body>  
</html>  
```
#### ```<html></html>``` : 페이지 전체의 콘텐츠를 감싸며, 루트(root) 요소라고도 부름.  

#### ```<head></head>```
이 요소는 페이지를 조회하는 사람들에게 **보여주는 콘텐츠가 아닌** 내가 HTML페이지에 포함하고 싶어하는 **모든 재료들**을 위한 컨테이너 역할  
> 포함 되는 것 : keywords(내용을 설명하는 단어나 문구), 검색 결과에 표시되길 원하는 페이지 설명, CSS, 문자 집합 선언 등과 같은 것들

#### ```<title>``` : 검색 엔진이 웹페이지를 분석할 때 메타데이터(데이터를 설명하는 데이터) 표시  

#### ```<body>``` : 페이지에 방문한 모든 웹 사용자들에게 보여주길 원하는 모든 컨텐츠를 담는다.  

#### ```<meta>``` : 웹 서버와 웹 브라우저 간에 상호 교환되는 정보 정의(웹 페이지 요약)   
보통 name과 content속성으로 페이지에서 관리자 정의 및 머릿말 요약에 유용  
- name : 메타 요소가 어떤 정보의 형태를 갖고 있는지  
- content : 실제 메타데이터의 컨텐츠  
```html
<meta name="author" content="Chris Mills" />  
```
---

#### ```<script>``` : html에 클라이언트 스크립트(예 : js)를 추가하고 싶을 때 사용  
body 태그의 **최하단**에 위치하는 것이 좋음   
- html 파일 내에 직접 코드를 작성X, 별도의 외부파일로 추가.. 관리/속도 면에서 굿!  
```html
<script src="myScript.js"></script>
``` 
- 외부 주소를 통해 추가  
```html
<script src="외부 주소"></script>
```



##### (```favicon``` )... 추가 예정

### ```<button>```태그를 사용하여추가
```html
<button class="favorite styled" type="button">Add to favorites</button>
```
**name** : 버튼의 value특성과 함께 양식 데이터의 일부를 구성  
**type** : 버튼의 유형 지정, *기본값은 submit*(**submit, reset, button**)  
**disabled** : 버튼을 비활성화  
**value** : 버튼의 초깃값

---
## 분할 영역 지정  
### ```<div>``` : block의 특성, 각 영역의 세선을 구분  
*width, height의 영향*을 받음  
*새로운 라인에서 시작*, 화면 크기 **전체의 가로폭** 차지(100%)  
```html
<div id="구분용 div name">
	<h3>제목</h3>
	<p>설명</p>
</div>
```

### ```<span>``` : 텍스트에 색칠, 크기, 좌우간격 조절에 사용  
inline의 특성(**새로운 라인에서 시작하지 않음**)  
줄을 바꾸지 않고, 다른 요소와 한 행에 위치, **옆으로 붙는** 속성  
content너비만큼 가로폭 차지  
***width, height, margin-top, margin-button 프로퍼티 지정 불가능***  
```html
<p>My mother has <span style="color:blue;font-weight:bold">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold">dark green</span> eyes.</p>
```
---

#### ``<a>`` : anchor, 하이퍼 링크를 걸어줌  
**[속성]**  
1.href : 클릭시 이동할 링크  
2.target : 링크를 여는 방법   
_self: 현재 페이지 (기본값)  
_blank: 새 탭  
_parent: 부모 페이지, iframe 등이 사용된 환경에서 사용   
_top: 최상위 페이지로, iframe 등이 사용된 환경에서 사용   
프레임이름: 직접 프레임이름을 명시해서 사용할 수도 있습니다.   
```html
<html>  
	<body>  
		<a href="http://www.naver.com">Go Naver</a><br>  
		<a href="http://google.co.kr" target="_blank">Go Google (new window)</a>  
	</body>  
</html>  
```

#### ```<img>``` : 이미지 삽입
```html 
<img src="my_profile.png" width="500" height="300">  
```

#### ```<li>``` : list, 목록을 만드는 태그    
***단독으로 사용 X***, ```<ul></li>``` 혹은 ```<ol></ol>``` 태그 내부에   
- ```<ol>``` 태그 : 번호를 메겨 순서가 있는 (ordered list) 목록  
- ```<ul>``` 태그 : 순서없이 모양으로 (unordered list) 목록  
- 이중 리스트를 만들기 위해서는 ```<ul>```이나 ```<ol>```하위에 다시 ```<ul>```이나 ```<ol>``` 태그 사용   
```html
<html>  
	<body>  
		<ol>  
			<li>목록1</li>  
			<li>목록2</li>  
		</ol>  
  
		<ul>  
			<li>목록1</li>  
			<li>목록2</li>  
			<li>목록3</li>  
			<ol>  
				<li>목록3-1</li>  
				<li>목록3-2</li>  
			</ol>    
		</ul>  
	</body>  
</html>  
```

#### ```<br>``` : 줄바꿈   
p태그 단점 : 단락 간의 간격이 고정, 반면 br태그는 쓰는 만큼 줄 바꿈!  

#### ```<form>``` : 웹페이지에서 입력 양식  
전체 양식, 화면에 보이지 않는 추상적 태그  
(로그인창, 회원가입 폼)    
- name : 폼의 이름   
- action : 폼 데이터가 전송되는 백엔드 url   
- method : 폼 전송 방식(get/post)   

#### ```<input>``` : 실제로 사용자가 양식을 입력하기 위한 태그  
type 속성-> 종류   
>text: 일반 문자    
>password: 비밀번호    
>button: 버튼     
>submit: 양식 제출용 버튼     
>reset: 양식 초기화용 버튼    
>radio: 한개만 선택할 수 있는 컴포넌트    
>checkbox: 다수를 선택할 수 있는 컴포넌트    
>file: 파일 업로드    
>hidden: 사용자에게 보이지 않는 숨은 요소    
name -> 데이터의 이름       
value -> 기본 값 지정      
```html
<form>  
	<p>  
		<strong>아이디</strong>  
		<input type="text" name="name" value="아이디 입력">  
	</p>  
	<p>  
		<strong>비밀번호</strong>  
		<input type="password" name="password" value="비밀번호 입력">  
	</p>  
	<p>  
		<strong>성별</strong>  
		<input type="radio" name="gender" value="M">남자  
		<input type="radio" name="gender" value="F">여자  
	</p>  
	<p>  
		<strong>응시분야</strong>  
		<input type="checkbox" name="part" value="eng">영어    
		<input type="checkbox" name="part" value="math">수학  
	</p>  
	<p>  
		<input type="submit" value="제출">  
	</p>  
</form>  
```  

#### ```<select>, <option>``` : 드롭다운 리스트 생성   
```html
<select>
	<option value="ktx">KTX</option>  
	<option value="itx">ITX 새마을</option>  
	<option value="mugung">무궁화호</option>  
</select>
```


##### 참고  
[ofcourse_html](https://ofcourse.kr/html-course/form-%ED%83%9C%EA%B7%B8)  
[생활코딩_html](https://www.opentutorials.org/course/3084/18896)  
[mdn web docs](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/HTML_basics)