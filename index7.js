console.log('connected');

for (let i = 0; i < 10; i++) {
    console.log('안녕', i);
}

for (let i = 0; i < 10; i += 2) {
    console.log('안녕 $(i');
}

for (let i = 0; i < 10; i = i + 3) {
    console.log(i);
}

for(let i = 1; i <= 5; i++) {
    console.log(i)
}
for(let i = 0; i > 5; i++) {
    console.log(i + 1);
}

for(let i = 5; i > 0; i--) {
    console.log(i);
}

let n = 11;
let sum = 0;

for(let i = 1; i < n + 1; i++) {
    sum = sum + i;
}

// 배열과 for문
let fruits = ['사과', '배', '포도', '바나나']
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits.i);
}

// 배열 내의 숫자 합
let numArr = [90, 50, 30, 20, 11];
let numSum = 0;
for(let i=0; i<numArr.length; i++) {
    numSum = numSum + numArr[i];
}
console.log(numSum);

//  1~20 짝수일 때의 합 구하기
let sum2 = 0;
for(let i=0; i<=20; i++) {
    if (i % 2 === 0) {
        sum2 = sum2 + i
    }
}

// let num3 = Number(prompt('숫자를 입력하세요'));
// for(let i=i; i<10001; i++){
//     if (i % 13 === 0 && i % 2 === 1) {
//         console.log(i)
//     }
// }

for(let i=2; i<10; i++) {
    console.log(`${i}단`);
    for(let j=i; j<10; j++) {
        console.log(`${i}x${j}=${i * j}`);
    }
}

// While 문
let n2 = 1;
while(n2<=5) {
    console.log(n2);
    n2++;
}

n2 = 10;
while(n2 >= 5){
    console.log(n2);
    n2--;
}

n2 = 10;
while(n2 >=1) {
    if(n2 % 2 === 0){
        console.log(n2);
    }
    n2--;
}

n2 = 1;
while(true){
    console.log('hi');
    if(n2===10){
        break;
    }
    n2++;
}

//  continue
let sum3=0;
for(let i=0; i<10; i++) {
    if(i%2===0){
        continue;
    }
    sum3+=i;
}

console.log(sum3);



