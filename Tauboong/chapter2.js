let hi;

/* 변수에는 매우 다양한 '값'들을 담을 수가 있다. */
const favoriteDrink = true;

const getDrink = favoriteDrink ? '코카콜라' : '제로펩시';

const myHommies = ['김씨', '안씨', '박씨', '이씨'];

const today = new Date();

const add = (num1, num2) => num1 + num2;

const plusOneTwo = 1 + 2;

/* 변수는 무조건 선언을 하고 사용을 해야 한다. */
const JS = 'JavaScript';

var TS = 'TypeScript';

let rq = 'React-query';

/* var의 경우에는 할당을 먼저 하고 선언을 뒤에 해 동작한다. */
console.log(myname);

myname = 'tauboong';
var myname;

console.log(myname);

/* 식별자는 대소문자를 구분한다. */
const MYNAME = 'boong';
const myName = 'boong';
// 상기 두 변수는 서로 다른 변수이다.

/* 변수는 의미를 명시적으로, 가독성이 좋게 작성해야한다. */
const name = 28;
// 변수명이 이름인데 28은 나이이다. 아주 나쁜 버릇.

const backGroundColor_white = '#fff';
const colors = ['red', 'black', 'blue', 'white'];
const consoleHello = () => console.log('Hello!');
// 이처럼 변수명은 변수명만 봐도 아 이것이 무엇이구나 하고 알아야한다.

/* 네이밍컨벤션 종류 */
let helloEveryBody; // camel case
let HelloEveryBody; // pascal case
let hello_everybody; // snake case
// let hello-everybody; 케밥 case - JS에선 허용되지 않으나 css에서 자주 쓰인다.
