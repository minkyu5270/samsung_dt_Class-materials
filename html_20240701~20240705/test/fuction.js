// let name ="배문형";

// // a,b 는 아무렇게나 써도 됨
// const multiply = function (a, b) {
//     let result = a * b;
//     return result; 
// }

// console.log(multiply(2,3));

// let moon = {
//     name: "배문형",
//     age: 36,
//     weight: 80,
// };

// let yoon = {
//     name: "윤석열",
//     age: 62,
//     weight:100,
// };

//두개의  objext를 넣으면,
//그 둘의 weight를 비교해서 누구의 weight가 높은지 비교하고
//{이름}이 더 무겁다!라고 출력하는 함수를 만들고 실행

// const m = function (a,b) {
//     if (a.weight>b.weight) {
//         console.log( a.name+ "이"+ " 더 무겁다!");
//     } else  {
//         console.log( b.name+ "이"+ " 더 무겁다!");
//     }
// }

// console.log(m(moon, yoon));

// 숫자값을 입력받아서, 1부터 해당 숫자까지 들어있는 숫자 배열을 만들고, 
//해당 배열의 모든 원소의 평균값을 리턴하는 함수

const calculateAverage = function (number) {
    array = [];
    for (i=1; i<=number; i++){
        array.push(i);
    }
    sum = 0;
    for (i=0; i<number;i++) {
        sum = sum + array[i];
    }
    let result = sum / number;
    return result;
}

console.log(calculateAverage(10));