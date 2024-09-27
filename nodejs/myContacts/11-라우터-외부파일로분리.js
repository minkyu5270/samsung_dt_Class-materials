//라우트 코드를 외부 파일로 분리하기

//관련파일
//./routes/contactsRoutes-1.js
//실행파일
//./routes/contactRoutes.js


//라우터 객체를 사용해 요청 경로별로 라우트하기

const express = require("express");
const app = express();

const port = 3000;

app.get("/",(req,res)=>{
    res.status(200).send("Hello Node!");
});

//간략화된 경로(라우트 경로), 라우터 모듈 임포트
app.use("/contacts",require("./routes/contactRoutes"));

app.listen(port,() => {
    console.log("Sever is running on port 3000");
 });

