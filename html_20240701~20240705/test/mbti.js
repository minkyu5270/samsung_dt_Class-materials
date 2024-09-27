const { Console } = require('console');

const prompt = require ('prompt-sync')();

let mbti = "";

// let ei = prompt("고등학교 때 유명했나요? (Y/N) ")
// let sn = prompt("스포츠(운동)을 하나요? (Y/N) ")
// let tf = prompt("수학을 잘하나요? (Y/N) ")
// let jp = prompt("지금 방이 깨끗한가요? (Y/N) ")

// 판단 로직 들어가는 부분

while (mbti.length < 1 ) {
    let ei = prompt("고등학교 때 유명했나요? (Y/N) ")
    if (ei =="Y") {
        mbti = mbti +"E";
        
    } else if (ei == "N") {
        mbti = mbti +"I";
    } else { console.log('답변 제대로 할 것');}
}

while (mbti.length < 2 ) {
    let ei = prompt("스포츠(운동)을 하나요? (Y/N) ")
    if (ei =="Y") {
        mbti = mbti +"S";
        
    } else if (ei == "N") {
        mbti = mbti +"N";
    } else { console.log('답변 제대로 할 것');}
}

while (mbti.length < 3) {
    let ei = prompt("수학을 잘하나요? (Y/N) ")
    if (ei =="Y") {
        mbti = mbti +"T";
        
    } else if (ei == "N") {
        mbti = mbti +"F";
    } else { console.log('답변 제대로 할 것');}
}

while (mbti.length < 4 ) {
    let ei = prompt("지금 방이 깨끗한가요? (Y/N) ")
    if (ei =="Y") {
        mbti = mbti +"J";
        
    } else if (ei == "N") {
        mbti = mbti +"P";
    } else { console.log('답변 제대로 할 것');}
}

console.log("당신의 MBTI는 hoxy " + mbti + "아닌가요?");








// if (ei == 'y') {
//     mbti_1 = 'E'
// } else {
//        mbti_1 = "I" 
// }

// console.log(mbti_1);
