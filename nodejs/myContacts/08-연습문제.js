//요청과 응답 연습문제 - DM제출
//1.
// ‘/users’ 경로로 요청할 때 사용자의 이름을 받아서
// ‘Hello, Node!’ 처럼 인사말을 반환하는 API를 작성해 보세요.
// app.js
// const express = require("express");
// const app = express();

// const port = 3000;

// //인덱스(시작) 페이지 요청
// app.get("/",(req,res) => {
//     res.status(200); //상태코드를 200으로 설정
//     res.send("Hello Node!");
// });

// app.listen(port,() => {
//     console.log(`${port}번 포트에서 서버 실행 중...`);
// });

//강사님 풀이
const express = require("express");
const app = express();

const port = 3000;
app.get("/users/:name",(req,res) => {
    const name = req.params.name;
    res.send(`Hello, ${ name }!`);
});
   
app.listen(port,() => {
    console.log(`${port}번 포트에서 서버 실행 중...`);
 });



//2.
// " /" 경로로 접속하면 "Welcome"을 표시하고
// "/about" 경로로 접속하면 "This is the about page."라는 텍스트를 표시하는 라우트 작성하세요.

// app.get("/",(req,res)=> {
//     res.status(200);
//     res.send("Welcome");
// });

// app.get("/about",(req,res)=> {
//     res.status(200);
//     res.send("This is the about page");
// });
//  app.listen(port,() => {
//      console.log(`${port}번 포트에서 서버 실행 중...`);
// });

//강사님 풀이
app.get("/",(req,res)=>{
    res.send("Welcome!")
});
app.get("/about",(req,res)=> {
   res.send("This is the about page");
});


//3.
// 사용하여 사용자가 입력한 숫자를 받아 해당 숫자의 제곱을 반환하는 API를 작성하세요.
// (예) "/square/5" 경로로 접속하면 25를 반환합니다. 


// // 숫자의 제곱을 반환하는 라우트
// app.get("/square/:number", (req, res) => {
//     // URL 파라미터에서 숫자를 가져옵니다.
//     const number = parseInt(req.params.number, 10);
    
//     // 숫자가 유효한지 확인합니다.
//     if (isNaN(number)) {
//         return res.status(400).send("Invalid number");
//     }
    
//     // 제곱을 계산합니다.
//     const square = number * number;
    
//     // 결과를 응답으로 보냅니다.
//     res.status(200).send(`${square}`);
// });

// app.listen(port, () => {
//     console.log(`${port}번 포트에서 서버 실행 중...`);
// });

//강사님 풀이
app.get("/square/:number",(req,res)=>{
    const number = req.params.number;
    const square = number * number;
    const square2 = number **2;
    res.send(`square is ${square}`);
});









