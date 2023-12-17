# css (Cascading Style Sheets) 
웹페이지를 꾸미려고 작성하는 코드  
Style sheet 언어(프로그래밍 언어, 마크업(markup) 언어가 아님)  
html 문서에 있는 요소들에 선택적으로 스타일 적용 가능  

- 전체 구조는 rule set이라고 부름  
- selector : rule set의 맨 앞에 있는 html요소 이름, 꾸밀 요소를 선택  
- 선언 : 꾸미길 원하는 요소의 속성의 명시

![css의 ruleset 해부](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png)   

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}

li,
h1 {
  color: red;
}
```
### css 선택자  
선택자 : 규칙 내부의 CSS 속성 값을 적용하기 위해 어떤 HTML 요소를 선택해야 하는지 브라우저에 알려주는 요소 및 기타 용어의 패턴  

---
**1.유형, 클래스 및 id 선택자**   
이 그룹에는 ```<h1>```과 같은 html요소를 대상으로 하는 선택자가 포함됨  
- **HTML 요소 선택자**-> HTML 요소의 이름을 직접 사용
```css
h2 {
}

strong {
  color: rebeccapurple;
}
```

- **아이디(id) 선택자** -> 여러 요소 중,특정 아이디 이름을 가지는 요소만을 선택
```css
<style>
    #unique { 
    }
</style>
```

- **클래스**를 대상으로 하는 선택자  
```css
.box{
}
```  
적용!  
```css
<h2 class="box">이 부분에 스타일을 적용합니다.</h2>
```

**2. 속성 선택자**  
- **요소에** 특정 속성이 있는지에 따라 요소를 선택  
```css
a[title]{
}
```  
- **특정 값**을 가진 속성의 존재 여부에 따라  
```css
a[href="https://example.com"]{
}
```

**3. 그룹(group) 선택자**  
여러 선택자를 같이 사용하고자 할 때, 여러 선택자를 **쉼표(,)**로 구분하여 연결  
```html
<style>

    h1 { color: navy; }

    h1, h2 { text-align: center; }

    h1, h2, p { background-color: lightgray; }

</style>
```

**4. 범용 선택자**  
별표(*)로 표시됨, 문서의 모든 항목을 선택  
다음은 모든 요소의 여백을 제거  
```css
* {
  margin: 0;
}
```

### 스타일 적용의 우선순위  
1. 인라인 스타일 (HTML 요소 내부에 위치함)
2. 내부 / 외부 스타일 시트 (HTML 문서의 head 요소 내부에 위치함)
3. 웹 브라우저 기본 스타일

### 색을 표현하는 3가지 방법  
1. 색상 이름으로 표현  
2. RGB 색상값으로 표현  
RGB 색상의 기본색(Red, Green, Blue)은 각각 0부터 255까지의 범위  

3. 16진수 색상값으로 표현  
RGB 색상의 기본색(Red, Green, Blue)은 각각 00부터 FF까지의 범위  
*예를 들면, 녹색을 나타내는 RGB 색상값 rgb(0,255,0)은 16진수 색상값으로는 #00FF00*  

## background 속성  
**1. background-color**  

**2. background-image**    
HTML 요소의 배경으로 나타날 배경 이미지(image)를 설정  
설정된 배경 이미지는 기본 설정으로 HTML 요소 전체에 걸쳐 반복되어 나타난다.  
```html
<style>
    body { background-image: url("/examples/images/img_background_good.png"); }
</style>
```
**3. background-repeat**  
배경 이미지의 기본 설정 : 수평과 수직 방향으로 모두 반복되어 나타남.
background-repeat 속성 -> 배경 이미지를 **수평**이나 **수직** 방향으로만 **반복**되도록 설정 가능  
1. 수평 반복
```html
<style>
    body { background-image: url("/examples/images/img_man.png"); background-repeat: repeat-x; }
</style>
```
2. 수직 반복  
```html
<style>
    body { background-image: url("/examples/images/img_man.png"); background-repeat: repeat-y; }
</style>
```
3. 반복 없이 한 번만 나타나도록  
```html
<style>
    body { background-image: url("/examples/images/img_man.png"); background-repeat: no-repeat; }
</style>
```

**4. background-position**  
반복되지 않는 배경 이미지의 상대 위치(relative position)를 설정  
```html
<style>
    body {

        background-image: url("/examples/images/img_man.png");

        background-repeat: no-repeat;

        background-position: top right;

    }
</style>
```
>이 속성에서 사용할 수 있는 키워드의 조합들
>1. left top  
>2. left center  
>3. left bottom  
>4. right top  
>5. right center   
>6. right bottom   
>7. center top  
>8. center center  
>9. center bottom  
혹은 **퍼센트(%)**나 **픽셀(px)**을 사용하여 상대 위치를 **직접 명시** 가능  
*(background-position: 100px 200px;)*

**5. background-attachment**  
위치가 설정된 배경 이미지를 해당 위치에 고정 가능  
스크롤과는 무관하게 화면의 위치에서 이동하지 않습니다.  
*(background-attachment: fixed;)*  

**-background 속성 한 번에 한 줄로 적용하기**
```html
<style>

    body { background: #FFCCCC url("/examples/images/img_man.png") no-repeat left bottom fixed; }

</style>
```

## text 속성  
**1. color**  

**2. direction**  
텍스트가 써지는 방향을 설정, (기본적으로 왼쪽->오른쪽)  
```.rightToLeft { direction: rtl; }```는 텍스트가 반대로 적힘(오른쪽->왼쪽)  
**3. letter-spacing**  
텍스트 내에서 ***글자 사이***의 간격을 설정  
```html
<style>

    .decLetterSpacing { letter-spacing: -3px; }

    .incLetterSpacing { letter-spacing: 10px; }

</style>
```

**4. word-spacing**  
텍스트 내에서 ***단어 사이***의 간격을 설정  
```.incWordSpacing { word-spacing: 10px; }```  

**5. text-indent**  
단락의 첫 줄에 들여쓰기 여부  
웹페이지에서 단락은 기본적으로 들여쓰기 설정 X
```.paraIndent { text-indent: 30px; }```

**6. text-align**  
텍스트의 수평 방향 정렬을 설정  
text-direction 속성과는 상관없이 우선적으로 적용  
```html
<style>

    h2 { text-align: left; }

    h3 { text-align: right; }

    h4 { text-align: center; }

</style>
```
**7. text-decoration** 
텍스트에 여러 가지 효과를 설정하거나 제거  
*text-decoration 속성값을 none으로 설정->링크(link)가 설정된 텍스트의 밑줄을 제거하는데 자주 사용*  
```html
<style>

    h2 { text-decoration: overline; }

    h3 { text-decoration: line-through; }

    h4 { text-decoration: underline; }

    a { text-decoration: none; }

</style>
```
**8. text-transform**  
텍스트에 포함된 모든 영문자를 대문자나 소문자로 변경(한글에 영향 X)  
(단어의 첫 문자만을 대문자로 변경 가능)
```html
<style>

    h2 { text-transform: uppercase; }

    h3 { text-transform: lowercase; }

    h4 { text-transform: capitalize; } /*문장에 포함된 모든 단어의 첫문자를 대문자로*/

</style>
```

**9. line-height**  
텍스트의 줄 간격을 설정  
``` .narrowLineHeight { line-height: 0.8; }```  
```.wideLineHeight { line-height: 1.8; }```  

**10. text-shadow**  
텍스트에 간단한 그림자 효과  
```h2 { text-shadow: 2px 1px #3399CC; }```
-> 2px : 그림자의 수평 오프셋. 오른쪽으로 2픽셀 이동  
-> 2px : 그림자의 수직 오프셋. 아래로 1 픽셀 이동  
-> #3399CC : 그림자의 색상  

## 크기 단위  
1. 백분율 단위(%)  
2. 배수 단위(em)  
3. 픽셀 단위(px)-> 얘만 절대적인 크기 설정    

## 크기  
>**속성**
>1. height  
>2. width  
>3. max-width / min-width  
>4. max-height / min-height  

**참고**  
[TCP School](https://tcpschool.com/css/css_basic_fonts)   
[mdn wed docs](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors)    

할거.. : [여기서부터 읽..css](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
css이어서 보고+ docker꼬옥꼬옥꼬오옥  