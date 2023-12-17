# ES6 모듈 (ECMASscript 모듈)

ES6 모듈 기능을 사용하지 않으면 분리된 자바스크립트 파일이 하나의 전역을 공유하게 됨 -> 엄격 모드(strict mode)에서만 적용 즉,ES6 모듈은 **파일 자체의 스코프를 제공**한다!(독자적인 모듈 스코프)  

## export  
모듈 안 선언한 식별자를 외부에 공개하여 다른 모듈들이 참조할 수 있도록 해줌  
사용 방법 : 선언문이나 객체 앞에 export키워드 사용  
```Javascript
export const pi = Math.PI;

export function square(x) {
	return x*x;
}

export class Person {
	constroctor(name) {
    	this.name = name;
    }
}

export { pi, sqaure, Person }; // 변수, 함수, 클래스를 하나의 객체
```

## default  
모듈에서 하나만을 export할 때
```Javascript
export default square
```

## import
export한 대상을 불러올 때 사용  
**ES6 모듈의 파일 확장자를 생략할 수 없다.**
```Javascript
import { pi, square, Person } from './lib.js';//같은 폴더 내의 ./lib.js를 불러옴  

import * as lib from './lib.mjs'; //하나의 이름으로 한꺼번에 불러옴  
console.log(lib.pi); // lib.mjs 파일의 변수나 함수는 객체 cal의 속성으로 참조

import { pi as PI, square as sq, Person as P } from './lib.mjs'; //as로 별명 지정
```
### const와 let
블록 바깥에서는 접근할 수 없습니다.(블록스코프)  
사용할 때, 선언한 곳보다 위에서 접근하는 것이 금지됩니다(에러 발생).
- const  
const는 다시 대입하는 것만 막지, const에 할당된 객체나 배열의 요소를 바꾸는 것은 막지 않습니다. 즉 데이터의 주소값만 고정하는 겁니다.

### function 
- 기본값(default)을 제공하여 실수로 
 ```Javascript
const func = function(msg = 'hello') {
  alert(msg);
};
func(); // 인자가 전달된 msg가 undefined일 경우에만 자동으로 hello가 됨(null이면 그대로 처리)
```

- rest (x를 제외한 나머지 인자들은 y 배열로)
const func4 = (x, ...y, z) => {}같은 것은 성립하지 않음
 ```Javascript
const func4 = (x, ...y) => {
  console.log(y.length);
};
func4(1, 2, 3, 4) // 3
```

- spread (배열을 펴준다)  
 ```Javascript
var array = [1, 2, 3];
var func5 = function(x, y, z) {
  alert(x + y + z);
};
func5(array[0], array[1], array[2]); // 방법1
func5.apply(null, array); // 방법2
func5(...array); //es2015에서 더 직관적으로 표현할 수 있도록 해줌
func5(...array, 4, 5, 6) // spread 후 다른 값을 추가 가능 =func5(1, 2, 3, 4, 5, 6)
```
- 화살표 함수  
화살표 함수에서는 this가 그대로 유지된다! 
1. 화살표 함수에는 new를 붙일 수 없고(생성자로 쓸 수 없고) arguments를 사용할 수도 없습니다.
2. =>는 상위 스코프의 this를 그대로 유지해주는 역할
function에서, forEach안에서는 this가 바뀌기 때문에 미리 self에 object의 this를 저장해서 활용  
 ```Javascript
var object = {
  name: 'Zero',
  friends: ['One', 'Two', 'Three'],
  alertFriends: function() {
    var self = this;
    this.friends.forEach(function(friend) {
      alert(self.name + ' and ' + friend);
    });
  }
};
object.alertFriends(); // 세 번 알림
```
**화살표 함수에서는 this가 그대로 유지된다!**
 ```Javascript
const object2 = {
  name: 'Zero',
  friends: ['One', 'Two', 'Three'],
  alertFriends() {     
    this.friends.forEach((friend) => {
      alert(this.name + ' and ' + friend);
    });
  }
};
object2.alertFriends();
```

## class (내부적으로는 그대로 프로토타입을 따름)... 
[조코딩_class](https://www.zerocho.com/category/ECMAScript/post/5759cd68b15f881700c32592)  

## 구조 분해 할당(destructuring)  
1. 배열 해체
```Javascript
const [c, ,d] = [1, 2, 3];
console.log(c); // 1
console.log(d); // 3
```
2. k처럼 obj2에 없는 변수를 선언했을 경우, 자동으로 undefined-> 에러가 발생**X** 않습니다.
```Javascript
const obj2 = {
  h: 'Eich',
  i: {
    j: 'Jay'
  }
}
const { h, i: { j }, k } = obj2;
console.log(h, j, k); // 'Eich', 'Jay', undefined
```
3. 객체 값을 받는 매개변수 해체  
value 속성의 값을 자동으로 변수 x로 할당하여 따로 선언 불필요  
```Javascript
const destruct = ({ value: x }) => {
 console.log(x);
};
const arg = { value: 3 };
destruct(arg); // 3
```

## for ~ of  
for in : 열거 가능한 모든 속성에 대해 반복  (속성의 키를 반복)
for of : 컬렉션의 요소를 반복 (속성의 값을 반복)  
단, for ~ of가 반복하는 컬렉션은 [Symbol.iterator]라는 속성이 있어야함.  
(이 속성이 있는 컬렉션에는 Array, String, TypedArray, Map, Set, DOM, 생성기 등.. symbol이 무엇인지 굳이 알 필요X)  
```Javascript
for (var i in 'string') { alert(i); } // 0, 1, 2, 3, 4, 5
for (var i of 'string') { alert(i); } // s, t, r, i, n, g
let array = [3, 5, 7];
array.foo = 'bar';
for (let j in array) { alert(j); } // 0, 1, 2, foo
for (let j of array) { alert(j); } // 3, 5, 7
```
array.foo = 'bar';을 했지만, for ~ of 문에서는 bar이 뜨지 않음->임의의 속성을 거르고 정상적 요소만 표시  
- for.. of문에서 배열.foreach와 같이 키/인덱스를 모두 받아오고 싶다면 이터러블(반복객체..배열, 유사배열, 객체 등)에 들어있는 entries()를 활용  
```Javascript
for (const [idx, val] of Iterable.entries()) {
  console.log(idx, val);
}
```

## Map  
Object와 매우 유사, 그러나 '넣은 순서대로 반복, 키가 문자열이 아니어도 됨, size를 항상 체크 가능, 편리 메소드 제공'!!   
set으로 설정, get으로 가져옴.
has-> 해당 키가 존재?  
delete -> 기존 키를 삭제   
cleat -> 초기화  
forEach -> 내용물 반복   
size -> 내용물의 크기 확인 가능  
entries -> map안의 키:값 쌍  
keys -> 키만    
values -> 값만   
* entries, keys, values의 특징적인 것은 이 반환값이 다 반복기라는 객체

### WeakMap  
키가 객체인 Map!  
사용 이유 : WeakMap의 키는 기존 객체를 약한 참조->가비지 컬렉션 방해 X  
 entries, keys, values 메소드를 사용 불가능  
 

#### 참고  
[export, import, default](https://velog.io/@klloo/JavaScript-ES6-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88)

(https://mycodings.fly.dev/blog/2022-08-14-understanding-es-6-modules)