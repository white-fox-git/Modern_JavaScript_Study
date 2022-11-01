# 10/26(수) 5장, 6장, 7장

## 토큰

<br>

## 토큰: 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소

### ex) var, sum, =, 1, +, 2, ;

<br>

## 완료값

<br>

## 크롬 개발자 도구애서 표현식이 아닌 문을 실행하면 항상 undefined를 출력하는 것 => 표현식인 문을 실행하면 언제나 평가된 값을 반환.

<br>

## 정규 표현식

<br>

## 특정한 패턴의 문자열을 찾기 위한 표현 방식

## 전화번호 정규 표현식

```javascript
/\d{2,3}-\d{3,4}-\d{4}/g;
// 전화번호 정규표현식
```

<br>

## undefined

<br>

## undefined를 강제로 선언하면 안된다! => 값이 없음을 할당하고 싶으면 null을 할당해야 한다.

<br>

## typeof null

<br>

## null은 원시타입이면서 typeof 연산을 하면 object가 나온다. => 자바스크립트 초창기 버전 버그. 고치지 않는 이유? => 사이드 이펙트가 너무 거대해지기 때문.

<br>

## 변수

<br>

## 이제부터 var를 쓰면 내가 사람이 아니다. 때려 죽여도 let const 쓰자!

<br>

## 불변의 진리: 가독성이 좋은 코드가 좋은 코드다.

<br>

## 부수효과

<br>

## 증감 연산자, 할당 연산자, delete 연산자

<br>

## NaN === NaN; => false

<br>
<br>

# 11/02(수) 8장, 9장, 10장

## 레이블 문이란 ? → 식별자가 붙은 문

<br>

```typescript
foo: console.log("foo"); // foo라는 레이블 식별자가 붙은 레이블 문
```

<br>

## - 레이블 문은 프로그램의 실행 순서를 제어하는데 사용

## - `case` 문과 `default` 문도 레이블 문이다.

## - 레이블 문을 탈출하려면 `break` 문에 레이블 식별자를 지정한다.

```typescript
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출
  console.log(2);
}
```

<br>

## 메소드 - 객체 안에 정의된 함수

<br>

## 프로퍼티 접근

<br>

## 1 .(마침표)를 이용하는 마침표 표기법(dot notation)

## 2. [ ]를 이용하는 대괄호 표기법(braket nontation)

<br>

```typescript
obj.firstName; // 마침표 표기법
obj["first-name"]; // 대괄호 표기법
```

<br>

## for-in문 - 객체 프로퍼티 루프 수행

<br>

## for of문 - 배열 순회

<br>

## 프로퍼티 삭제

### delete 연산자를 사용하여 프로퍼티를 삭제 가능

```typescript
const obj = {
  color: "black",
  width: "100px",
  height: "100px",
};
delete obj.color;
console.log(obj); // {width: "100px", height: "100px"}
```

<br>

## 메소드 축약 표현

```typescript
const obj = {
  oldHello: function () {
    console.log("hello!");
  }, // 옛날 버전

  newHello() {
    console.log("hello!");
  }, // 새로운 버전 -> 이렇게 사용하자
};
```
