console.log('연결');

function helloWorld() {
    console.log('Hello Wrold');
}

helloWorld();

function helloWorld2() {
    return 'Hello World2'
}

helloWorld2();

function add(num1, num2) {
    return num1 + num2;
}

function add2(num1, num2) {
    console.log(num1 * num2)
}

let result = add(5, 7);
let result2 = add2(5, 5);

console.log(result, result2);

// ㅎㅅ ㅍㅎㅅ

let helloWorld3 = function() {
    console.log('Hello World3')
};
helloWorld3();

// Arrow Function

let = helloWorld4 = () => {
    console.log('Hello World4')
};
helloWrold4();

//  
function sayHello1(text) {
    return text;
}

console.log(sayHello1('ㅇㄴㅎㅅㅇ'));

function sayHello2(text, name) {
    return `${text} ${name}`;
}

console.log(sayHello2('hi', 'ㅇㄴ'));

// 실습 1

function multifly(num1, num2) {
    return num1 * num2
}

console.log(multifly(3, 7));
console.log(multifly(4, 4));


// 실습 2

function square(num) {
    return Math.pow(num);
}

console.log(square(4, 2));