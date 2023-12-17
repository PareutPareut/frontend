# html 학습
>1. form데이터  
>2. document?  
>3. event?

## 1. ```<form>```
**사용자가 입력한 정보를 서버로** 정보를 전송할 때 사용하는 것  

```<form action="http://localhost/login.php" method="post">```  
다음의 주소로 이동 : http://localhost/login.php?id=입력한_아이디&pwd=입력한pwd&hide=egoing
- **action="주소"** : 사용자가 입력한 **정보를 어디로 보낼** 것인가? 
- **method="post"** : method는 전송 방법의 유형  
기본 전송 방법은 get(url을 통해 data 전송/ 데이터 전부 노출), *post를 권장(보안)*    

>- **```<label>```**  : 특별한 기능은 없지만, **의미**를 더해줌.*(주석으로 설명)   
>각각의 label들이 누구의 이름표인가?->for를 사용 **or** ```<label>```로 감싸줌.  
>1. label에 id라는 속성을 주어 label아래의 id를 적어준다.  
>2. ```<label>```사용의 경우, 바깥쪽에 있는 텍스트들이 label이 된다.  

>- **```<input type="hidden" name="hide" value="egoing">```**  
>*서버로 데이터를 전송해야 할 때* ui(사용자 인터페이스)가 필요 없거나 몰래 서버로 데이터를 전송해야 하는 경우  
>( type="hidden"인 imput태그는 화면 상에 **표시되지 않지만**, 제출 버튼을 누르면 hide=egoing이 **전달**됨. )
```html
<body>
    <form action="">
      <p>   <!--1. label에 id라는 속성을 주어 누구의 속성인지 알려준다*/--> 
        <label for="id_txt">text</label> : 
        <input id="id_txt" type="text" name="id" value="default value">
      </p>
      <p> 
        <label for="password">password</label>
        <input id="password" type="password" name="pwd" value="default value">
      </p>

      <input type="hidden" name="hide" value="egoing">

      <!--2. form태그의 바깥쪽에 있는 텍스트들이 label이 된다.-->
      <label>textarea :
        <textarea cols="50" rows="2">기본값입니다!</textarea>
      </label> <!--50글자를 2줄 입력할 수 있는 칸이 생성-->
    </form>
</body>
```

---
# document?
## 2-1. 문서 객체 모델(DOM, Document Object Model)
- XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스  
- 문서 내의 모든 요소를 정의, 각각의 요소에 접근하는 방법을 제공   
- DOM은 **세 가지 모델**로 구분된다 : Core DOM(모든 문서타입을 위한), HTML DOM, XML DOM  
![DOM은 W3C의 표준 객체 모델](https://tcpschool.com/lectures/img_js_htmldom.png)  
- **HTML DOM** : HTML 문서를 **조작하고 접근**하는 표준화된 방법을 정의, **모든 HTML 요소는 HTML DOM를 통해 접근 가능**  

## 2-2. document 객체  
Document 객체 = 웹 페이지 그 자체  
웹페이지에 존재하는 html요소에 접근하고자 할 때, 반드시 document객체부터 시작해야함.  

### document 메소드
(HTML 요소와 관련된 작업을 도와주는 다양한 메소드를 제공)
1. HTML **요소의 선택**
> - document.getElements**By**TagName(태그이름) : 해당 **태그 이름**의 요소를 **모두** 선택   
> - document.getElement**By**Id(아이디) : 해당 **아이디**의 요소를 선택   
> - document.getElements**By**ClassName(클래스이름) : 해당 클래스에 속한 요소를 **모두** 선택    
> - document.getElements**By**Name(name속성값) : **해당 name 속성값**을 가지는 요소를 **모두** 선택    
> - document.querySelectorAll(선택자) : **해당 선택자**를 가지는 요소 **모두** 선택(브라우저별로 지원 여부가 다름)  

2. HTML **요소의 생성**  
> - document.**create**Element(HTML요소) : 지정된 hmtml요소 **생성**    
> - document.**write**(텍스트) : HTML 출력 스트림을 통해 텍스트를 **출력**  

3. HTML **이벤트 핸들러 추가**  
> - document.**getElement**By**Id**(아이디).onclick = function(){ 실행할 코드 }  
> 마우스 클릭 이벤트와 연결될 이벤트 핸들러 코드 추가  

4. HTML **객체의 선택**  
HTML DOM에서 제공하는 객체 집합(object collection)을 이용하면 HTML 객체를 손쉽게 선택 가능!  
> document.forms : form요소를 모두 반환함.  
> document.images : img요소를 모두 반환함....  

## 2-3. DOM 요소  
HTML 요소를 다루기 위해서는 우선 해당 요소를 선택해야해!  

**js에서 특정 html 요소를 선택하는 방법**  
> **html tag name/ id/ class/ name 속성/ css 선택자/ html 객체 집합**을 이용하여 선택 가능  

1. **HTML 태그 이름**(tag name)을 이용한 선택  
[**getElements*By*TagName()**] 메소드 : tag이름을 사용하여 html요소 선택   
***item()*** *메소드 : 해당 html객체 집합에서 **전달받은 인덱스에 해당하는 요소**를 반환*
```html
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<title>JavaScript DOM Element</title>
</head>

<body>

	<h1>HTML 태그 이름을 이용한 선택</h1>
	<ul>
		<li>첫 번째 아이템이에요!</li>
		<li>두 번째 아이템이에요!</li>
		<li>세 번째 아이템이에요!</li>
		<li>네 번째 아이템이에요!</li>
		<li>다섯 번째 아이템이에요!</li>
	</ul>

	<script>
		var selectedItem = document.getElementsByTagName("li");		// 모든 <li> 요소를 선택
		for (var i = 0; i < selectedItem.length; i++) {
			selectedItem.item(i).style.color = "red";	// 선택된 모든 요소의 텍스트 색상을 변경
		}
	</script>
	
</body>

</html>
```  

2. **아이디(id)**를 이용한 선택 **->** getElement**By**Id()  
```html
<script>
  var selectedItem = document.getElementById("even"); // 아이디가 "even"인 요소를 선택

  selectedItem.style.color = "red"; // 선택된 요소의 텍스트 색상을 변경
</script>
```
3. **클래스(class)**를 이용한 선택 **->** getElements**By**ClassName()  
```html
<script>
  var selectedItem = document.getElementsByClassName("odd"); // 클래스가 "odd"인 모든 요소를 선택

  for (var i = 0; i < selectedItem.length; i++) {

      selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경
  }
</script>
```

4. **name 속성**을 이용한 선택 -> getElementByName()  

5. **CSS 선택자(selector)**를 이용한 선택  
querySelectorAll() 메소드는 CSS 선택자(아이디, 클래스, 속성, 속성값 등)를 이용하여 HTML 요소를 선택합니다.  
```html
<script>
  var selectedItem = document.querySelectorAll("li.odd"); // 클래스가 "odd"인 요소 중에서 <li> 요소만을 선택함.

  for (var i = 0; i < selectedItem.length; i++) {

      selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.

  }
</script>
```  
6. **HTML 객체 집합**(object collection)을 이용한 선택
```html
<script>
		var title = document.title;		// <title> 요소를 선택함.
		document.write(title);
</script>
```

### DOM 요소의 ***내용*** 변경  
html DOM을 이용하면 HTML 요소의 내용이나 속성값을 손쉽게 변경 가능!  
특히, **innerHTML 프로퍼티**를 이용하면 쉽게 변경 가능!  
1. innerHTML 프로퍼티-> **요소 변경**  
```html
<body>

	<h1>innerHTML을 이용한 요소의 내용 변경</h1>
	<p id="text">이 문장을 바꿀 것입니다!</p>
	
	<script>
		var str = document.getElementById("text");
		str.innerHTML = "이 문장으로 바뀌었습니다!";
	</script>
	
</body>
```
2. innerHTML 프로퍼티-> **속성값 변경**  
```html
<body>

	<h1>속성 이름을 이용한 속성값 변경</h1>
	<a id="link" href="http://tcpschool.com/html/intro">HTML 수업 바로 가기!</a><br><br>
	<button onclick="changeLink()">자바스크립트 수업으로 바꾸기!</button>
	
	<script>
		function changeLink() {
			var link = document.getElementById("link");// 아이디가 "link"인 요소를 선택
			link.href = "http://tcpschool.com/javascript/intro";	// 해당 요소의 href 속성값을 변경
			link.innerHTML = "자바스크립트 수업 바로 가기!";		// 해당 요소의 내용을 변경함.
		}
	</script>
	
</body>
```

### DOM 요소의 ***스타일*** 변경  
**style 프로퍼티**를 이용하여 HTML 요소에 CSS 스타일을 적용  
```html
<body>

	<h1>DOM 요소의 스타일 변경</h1>
	<p id="text">이 문자열의 기본색은 검정색입니다!</p>
	<button onclick="changeRedColor()">빨간색 글자!</button>
	<button onclick="changeBlackColor()">검정색 글자!</button>
	
	<script>
		var str = document.getElementById("text");	// 아이디가 "str"인 요소를 선택함.
		function changeRedColor() {
			str.style.color = "red";				// 해당 요소의 글자색을 빨간색으로 변경함.
		}
		function changeBlackColor() {
			str.style.color = "black";				// 해당 요소의 글자색을 검정색으로 변경함.
		}
	</script>
	
</body>
```
---
# 3. event?   
브라우저에서의 어떤 사건을 의미 (사용자가 클릭, 스크롤, 필드의 내용을 바꾸었을 *때*)  
-event target : 이벤트가 일어날 객체(예:버튼)  
-event type : 이벤트의 종류(예:click, scroll, mousemove..[더 많은 종류](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing))  
-event handler : 이벤트가 발생했을 때 동작하는 코드  

### 이벤트 등록 방법  
1. **inline** 방식(바람직X) : 이벤트를 **이벤트 대상의 태그 속성**으로 지정하는 것  
- 이벤트가 발생한 대상을 필요로 하는 경우, this를 통해 참조 가능   
```html
<input type="button" onclick="alert('Hello world, '+this.value);" value="button" />
```  

2. **property listener** : 이벤트 대상에 해당하는 객체의 프로퍼티로 이벤트를 등록하는 방식
```html
<input type="button" id="target" value="button" />

<script>
    var t = document.getElementById('target');
    t.onclick = function(){
        alert('Hello world'+event.target.value); 
        //이벤트 실행 맥락 정보 필요한 경우에는 이벤트 객체 사용(+event.target.value)하기도..  
    }
</script>
```  

3.***addEventListener()*** -> **하나의 이벤트 대상**에 **복수의 동일 이벤트 타입 리스너**를 등록 가능  
*(ie8이하에서는 호환되지 않는다. ie에서는 attachEvent 메소드를 사용)*  
```html
<input type="button" id="target1" value="button1" />
<input type="button" id="target2" value="button2" />
<script>
    var t1 = document.getElementById('target1');
    var t2 = document.getElementById('target2');

    function btn_listener(event){
        switch(event.target.id){
            case 'target1':
                alert(1);
                break;
            case 'target2':
                alert(2);
                break;
        }
    }
    t1.addEventListener('click', btn_listener);
    t2.addEventListener('click', btn_listener);
</script>
```






##### 출처
[2. dom 객체 : tcp school](https://tcpschool.com/javascript/js_dom_document)
[3. event : 생활 코딩](https://opentutorials.org/course/1375/6629)  