## 다양한 형태의 선택자  
주의 : -```<li id="select">CSS</li>``` 모두 html임, (select는 html 속성 값, id는 속성), css는 ```color:red;```, 이런 것 뿐!!  

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      li{
        color:red;
        text-decoration:underline;
      }
      #select{
        font-size:50px;
      }
      .deactive{
        text-decoration : line-through;
      }
    </style>
  </head>
  <body>
    <h1 class="deactive">우희희</h1>
    <ul>
      <li>HTML</li>
      <li id="select">CSS</li>
      <li class="deactive">우서?</li>
    </ul>
  </body>
</html>
```

**1. 태그 선택자**  
html의 모든 li태그에 영향을 줌  
```html
li{
    color:red;
    text-decoration:underline;
}
```
- 여기서 color:red;만 css, 나머지 html임!  

**2. 클래스 선택자**  
id는 하나 유일하게 사용해야하지만, class는 다수의 특성을 서로 다른 태그를 가지더라도 지정할 수 있음  
```html
.deactive{
        text-decoration : line-through;
}
...
<h1 class="deactive">우희희</h1>
```
---
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      ul li{
        color:red;
      }
      #lecture>li{
        border:1px solid red;
      }
      ul,ol{
        background-color: powderblue;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <ol id="lecture">
      <li>HTML</li>
      <li>CSS
        <ol>
          <li>selector</li>
          <li>declaration</li>
        </ol>
      </li>
      <li>JavaScript</li>
    </ol>
  </body>
</html>
```
---
**3. 아이디 선택자**
id 속성이 값에 해당하는 태그를 선택하는 선택자  
```<li id="select">CSS</li>```에만 효과를 주려고 ```<head>```의 ```<style>```태그 안에 ```#select{font-size:50px;}```!! 
```html
#select{
        font-size:50px;
}
...
<li id="select">CSS</li>
``` 
>### 상속  
>부모 엘리먼트의 속성을 자식 엘리먼트가 물려받는 것  
>상속이 되는 것과 되지 않는 것이 있다 [상속을 하는 속성과 하지 않는 속성](https://www.w3.org/TR/CSS21/propidx.html)  

**4. 조상 자손 선택자**  : 조상 밑의 모든 태그 선택  
(예 : ul 밑에 있는 모든 태그를 선택)  
```html
ul li{
    color:red;
}
```  
**5. 부모 자식 선택자** : 특정 속성 값 바로 밑의 li만을 선택  
(예 : #lecture 바로 밑에 있는 li만을 선택)  
```html
#lecture>li{
    border:1px solid red;
}
```  
```html
<ol id="lecture">
      <li>영향!</li>
      <li>영향!
        <ol>
          <li>여기는 안받지요</li>
          <li>여기는 안받지요</li>
        </ol>
      </li>
      <li>영향!</li>
</ol>
```
- 그런데 color속성은 해당 태그를 모두 물들인다(얘가 특이한 애,,)  

---

**6. 가상(pseudo) 클래스 선택자**  
```html
<style>
    a:hover{
        color:yellow;
    }
     input:active{
        color:green;
    }
</style>
```
- 2개가 동급이면 뒤에 있는 것을 선택-> hover를 올려 위로 위치를 변경
>- **아래의 선택자는 순서대로 지정하는 것이 좋습니다.**  
>:link - 방문한 적이 없는 링크  
>:visited - 방문한 적이 있는 링크 (보안 상 몇 개의 속성만 변경이 가능)  
>:hover - 마우스를 롤오버 했을 때   
>:active - 마우스를 클릭했을 때   
>:focus - 가장 뒤에 두는 것이 귣, (input 입력칸 선택->focus 잡힘)
---

- visited의 경우는 보안상의 이유로 아래와 같은 속성만 변경이 가능
>color : text색상 지정    
>background-color : 요소의 배경 색상 지정    
>border-color : 테두리 색깔 지정  
border: 2px solid #333; -> (두께2, 단선, 색깔)  
>outline-color : 요소의 외곽선의 색상을 지정합니다. 주로 포커스 등에 사용  
---

## 속성  
---
### 서체  
#### font-size : 글꼴의 크기 지정  
[주요 단위 3가지]  
- 절대적인 크기  
px : 모니터 상의 화소 하나의 크기에 대응되는 단위, 고정된 값   

- 상대적인 크기
**rem** : html 태그에 적용된 font-size에 따라 **상대적**으로 크기가 결정  
em : 부모 태그의 영향을 받는 상대적인 크기 <- 파악하기 어려움  

- **rem**을 주로 사용한다-> **폰트 크기를 조정**할 수 있는 사용자의 권리!  
(사용자가 브라우저의 글꼴 크기를 키웠을 때, px는 불변/ rem은 바뀐다!)  

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #px{font-size:16px;}
      #rem{font-size:1rem;}
    </style>
  </head>
  <body>
    <div id="px">PX</div>
    <div id="rem">REM</div>
  </body>
</html>
```  

#### color  
1. RGB : ```h1{color:rgb(0,255,0)}```  
2. 16진수 : ```h1{color:#00FF00;}```   
3. 색상 이름 지정  

#### text-align : 텍스트를 정렬  
- text-align의 값으로 올 수 있는 값  
>left : 왼쪽 정렬  
>right : 오른쪽 정렬  
>center : 가운데 정렬  
>justify : 양쪽에 균등하게 분배  

#### font  
1. font-family - 글꼴 지정  
```p{ font-family: arial, "Times New Roman", verdana, sans-serif}```  
- 총 4개의 글꼴을 나열하였는데, 첫번째 글꼴이 존재하지 않으면 다음의 폰트를 시도함..  
- ```sans-serif``` : 모든 글꼴이 사용 불가능하다면, 브라우저가 자체적으로 가지고 있는 일반적인 sans-serif 글꼴을 사용하도록  
- 마지막 폰트는 다음과 같은포괄적인 폰트로 지정    
>serif (장식이 있는 폰트 중에 하나를 선정해준다.)   
>sans-serif (브라우저가 장식이 없는 폰트 중에 하나를 선택)  
>cursive (흘림체)  
>fantasy  
>monospace (고정폭)  

2. font-weight: bold - 폰트가 두껍게 표시됨!  

3. line-height - 행과 행 사이의 간격을 지정  
기본 값은 normal로, 수치로는 1.2에 해당  
```html
p{
    line-height: 2; 
}
```
- 현재 element 폰트 크기의 2배 만큼 간격을 준다.  

4. font - 폰트와 관련된 **여러 속성을 축약형**으로 표현, **순서**를 지켜서 기술  
>font: font-style font-variant **font-weight** **font-size**/line-height **font-family**|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;  
- font-size와 font-family는 필수로 포함되어야 하는 정보
```html
h1{
    font: 15px arial, sans-serif;
}
```
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #type1{
        font-size:5rem;
        font-family: arial, verdana, "Helvetica Neue", serif;
        font-weight: bold;
        line-height: 2;
      }
      #type2{
        font:bold 5rem/2 arial, verdana, "Helvetica Neue", serif;
      }
    </style>
  </head>
  <body>
    <p id="type1">
      Hello world<br>
      Hello world
    </p>
    <p id="type2">
      Hello world<br>
      Hello world
    </p>
  </body>
</html>
```

#### 서체는 두 가지 방법으로 구분할 수 있다.
1.고정폭(monospaced)  
2.가변폭  

---

## 캐스캐이딩, style 우선순위  
CSS = **Cascading** Style Sheet  
하나의 태그에 중첩하여 여러 개의 css가 적용되었을 때?!  
구체적이고 명시적일수록 우선순위 UP!  
1. style attribute  
2. id selector  
3. class selector  
4. tag selector  

## layout, 레이아웃  
구획을 나누고, 적절히 정보를 배치하는 것    

### html 엘리먼트 : 인라인 vs 블럭레벨
- 화면 **전체**를 사용하는 태그 => **block level** element
- 화면의 **일부**를 차지하는 태그 => **inline** element
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
        h1,a{border:1px solid red;}
        h1{display: inline;}
        a{display:block;}
    </style>
  </head>
  <body>
    <h1>Hello world</h1>
    안녕하세요. <a href="https://opentutorials.org">생활코딩</a>입니다.
  </body>
</html>
```
h1은 화면 전체를 쓰는 반면, a는 자신과 자신을 둘러싼 요소와 하나의 같은 줄에 위치함! *그런데* 직접 display속성의 속성값을 표시하여 변경 가능~  

### Box Model, 박스모델  
[TCP School-박스 모델(box model)](https://tcpschool.com/css/css_boxmodel_boxmodel)  

부피감, 간격을 중요하는 것


### 포지션  
[zeroCho](https://www.zerocho.com/category/CSS/post/5864f3b59f1dc000182d3ea1)  
'html의 태그들 **'어디에' 위치**시킬 것인가 결정  
- 위치를 지정하는 4가지 방법  
**1. static**   
기본적으로 모든 태그들은 위치를 지정하지 않은 ```position:static``` 상태  
기본적으로 왼쪽에서 오른쪽, 위에서 아래로 쌓임.  

**2. relative**  
태그의 위치를 변경하고 싶을 때, **```position: relative```**를 사용  
relative가 **부모 element를 기준**으로 주어진 픽셀만큼 움직인다.  
-> **top, right, bottom, left** 속성을  동해 위치 조절이 가능
(left가 right보다 우선, top이 bottom보다 우선된다.)  
- top: 5px라면 아래로 이동, -5라면 위로 이동, 즉  relative는 각각의 방향을 기준으로 **태그 안쪽 방향**으로 이동합니다. 바깥쪽으로 이동하게 하고 싶으면 음수 -5px  

**3. absolute**, 절대 위치  
position : absolute;
- **static이 아닌 부모**를 만나면(position type이 지정이 된) 그 부모를(grand) **기준**으로 left/top의 값을 정하게 된다.(위치 지정)
- 부모와의 관계가 끊기기 때문에 자신의 크기는 자신의 컨텐츠 크기만해진다, 그리고 부모 역시도 자식을 없는 셈 친다.  
- *만약 조상 중, 포지션이 relative, absolute, fixed인 태그가 없다면 가장 위의 태그(body)가 기준*  
```html
#me{
    position: absolute;
    left:0;
    top:0;
}
```
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
        #parent, #other, #grand{
            border:5px solid tomato;
        }
        #grand{
            position: relative;
        }
        #me{
            background-color: black;
            color:white;
            position: absolute;
            left:0;
            top:0;
        }
    </style>
  </head>
  <body>
    <div id="other">other</div>
    <div id="grand">
       grand
        <div id="parent">
           parent
           <div id="me">me</div>
        </div>
    </div>
     
  </body>
</html>
```

**4.fixed**  
특정한 element를 **화면에 고정**시켜 **스크롤로부터 독립**시킴(스크롤을 내려도 그대로 위치)  
- 스크롤 하단에 고정된 상태로 위치  
```html
#me{ 
            position: fixed;
            left:0;
            bottom:0;
            width:100%;
            text-align: center;
}
```
- absolute처럼 width와 height값을 지정하지 않으면 부모가 없어지기 때문에 자신의 부피는 딱 자신의 컨텐츠 크기가 된다.  
- 부모 element는 자식과의 관계가 끊겨, 부모 element는 자식 element의 크기를 포함하지 않는다.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
        body{
            padding-top:30px;
        }
        #parent, #other{
            border:5px solid tomato;
        }
        #large{
            height:10000px;
            background-color: tomato;
        }
        #me{
            background-color: black;
            color:white;
            position: fixed;
            left:0;
            top:0;
            text-align: center;
        }
    </style>
  </head>
  <body>
    <div id="other">other</div>
    <div id="parent">
       parent
       <div id="me">me</div>
    </div>
    <div id="large">large</div>
  </body>
</html>
```

### float  
편집 디자인에서 이미지를 삽화로 삽입할 때 사용하는 기법(+레이아웃 잡을 때)   
- <p style="clear:both;"> : 사진
```html
<!doctype html>
<html>
<head>
  <style>
    img{
      width:300px;
      float:left;
      margin:20px;
    }
    p{
      border:1px solid gray;
    }
  </style>
</head>
<body>
  <img src="sample.mt.jpg" alt="">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate minus, obcaecati quia eaque perspiciatis! Vero cum libero architecto. Odit, et. Totam expedita
  </p>
  <p style="clear:both;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate minus, obcaecati quia eaque perspiciatis! Vero cum libero architecto. Odit, et. Totam expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate minus, obcaecati quia eaque perspiciatis! Vero cum libero architecto. Odit, et. Totam expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate minus, obcaecati quia eaque perspiciatis! Vero cum libero architecto. Odit, et. Totam expedita
  </p>
</body>
</html>
```
