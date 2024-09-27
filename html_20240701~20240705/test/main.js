let moon = {
    name: "배문형",
    age: 36,
}

let yoon = {
    name: "윤석열",
    age:62,
}

// 3>6= false // boolean : 참 또는 거짓, 예 아니오, 1 or 0

console.log(moon.age>yoon.age);

if (moon.age>yoon.age) {
    console.log(moon.name + '이 ' + yoon.name +'보다 나이가 많습니다.')
} else if (moon.age <yoon.age) {
    console.log(moon.name + '이 ' + yoon.name + '보다 나이가 젊습니다.')
}
    else {
        console.log('둘은 나이가 같습니다.')
    }


// 삼향연산자
console.log( (moon.age<yoon.age ? moon.name : yoon.name) + '이 젊습니다.')
console.log('--------');

moon.weight =80;
yoon.weight =100;

console.log(moon);

 // 반복문

 for (let i =0; i < 10; i++) {
    console.log(i);
 }