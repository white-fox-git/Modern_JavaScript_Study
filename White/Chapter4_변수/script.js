// 변수 선언문 -> var, let, const

var variable_1;
let variable_2;
const variable_3 = 0; // 값을 할당하지 않으면 선언이 불가능

document.querySelector('#variable_1').innerHTML = variable_1;
document.querySelector('#variable_2').innerHTML = variable_2;
document.querySelector('#variable_3').innerHTML = variable_3;

// 호이스팅

document.querySelector('#hoisting').innerHTML = hoisting;
var hoisting = 'hoisting'; // 변수 호이스팅

// 네이밍 규칙

var camelCase = 'camelCase';
var snake_case = 'snake_case';
var PascalCase = 'PascalCase';

document.querySelector('#camelCase').innerHTML = camelCase;
document.querySelector('#snake_case').innerHTML = snake_case;
document.querySelector('#PascalCase').innerHTML = PascalCase;