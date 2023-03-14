console.log('come');
// 조건문

// 1. if문
if(5 > 3) {
    console.log('IF')
}

let number = prompt('숫자를 입력해 주세요');
//  number = Number(number);
console.log(typeof number);

if (number > 10) {
    console.log('이 수는 10보다 큽니다.');
} else {
    console.log('이 수는 10보다 작거나 같습니다');
}

if (number > 10) {
    console.log('이 수는 10보다 큽니다.');
} else if(number === 10) {
    console.log('입력한 수는 10입니다');
} else {
    console.log('이 수는 10보다 작거나 같습니다');
}

// 성적표 출력
if (number > 100 || number < 0) {
    console.log('잘못 입력된 숫자')
} else if (number >= 90) {
    console.log(' A ')
} else if (number >= 80) {
    console.log(' B ')
} else if (number >= 70) {
    console.log(' C ')
} else if (number >= 60) {
    console.log(' D ')
} else {
    console.log(' F ')
}

let age = 15;

if (age >= 20) {
    console.log('성인')
} else if (age >= 17 && age < 20) {
    console.log('고딩')
} else if (age >= 14 && age < 17) {
    console.log('중딩')
} else if (age >= 8 && age < 14) {
    console.log('초딩')
} else if (age >= 0 && age < 8) {
    console.log('유아')
} else {
    console.log('잘못 입력')
}

// db
let userId = 'user01'
let userPw = '1234qwer'

function loginUser() {
    let inputId = prompt('아이디를 입력하세요');
    let inputPw = prompt('비밀번호를 입력하세요');
}

if(userId === inputId) {
    if(userPw === inputPw) {
        alert('로그인 성공');
        } else {
            alert('비밀번호가 틀렸습니다.');
        }
    } else if (inputId === ``){
        alert('아이디를 입력하세요.');
    } else {
        alert('아이디가 틀렸습니다.');
    }

// loginUser();

// 2. Switch

let a = 4;
switch(a) {
    case 3:
        console.log('a가 3')
        break;
    case 4:
        console.log('a가 4')
        break;
    case 5:
        console.log('a가 5')
        break;
    default:
        console.log('a 값을 알 수 없음')
        break;
}

let num = 95

switch(num / 10) {
    case 10:
    case 9:
        console.log('A')
        break;
    case 8:
        console.log('C')
        break;
    case 7:
        console.log('D')
        break;
    case 6:
        console.log('E')
        break;
    case 5:
        console.log('F')
        break;

    default :
        console.log('F')
} 

// 삼항 연산자

let num2 = 5;

num % 2 === 1 ? console.log('홀수') : console.log('짝수');

// Quiz2

let now = new Date().getHours();

let time = now >= 12 ? ('오후') : ('오전');
console.log(time);
