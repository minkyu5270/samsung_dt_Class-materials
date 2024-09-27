//사용자 인증
//로그인, 로그아웃 처리하기

//1.로그인처리
//세션(토큰발행) 쿠키/서버저장하기
//2.로그아웃 처리
//세션(토큰)지우기

//로그인 관련파일
// ./routes/loginRoutes-6.js 
// ./controllers/loginController-6.js up
// ./middleware/checkLogin.js 
// ./views/home-3.ejs up
// ./views/include/_header-2.ejs up
// ./views/index-5.ejs up
// ./views/update-3.ejs up

// home-3.ejs(로그인화면), register.ejs(회원가입) -> _home_header.ejs 사용
//그 외 모든 ejs에서는 -> _header-2.ejs 사용

//관련파일(그대로)
// ./routes/contactRoutes-6.js  
// ./controllers/contactController-15.js 

const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const app = express();

//뷰엔진 설정하기
app.set("view engine","ejs");
app.set("views","./views");

const port = 3000;

//public폴더
app.use(express.static("./public"));
//method-override 미들웨어 등록
app.use(methodOverride("_method"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",require("./routes/loginRoutes"));
app.use("/contacts",require("./routes/contactRoutes"));

app.listen(port,()=>{
    console.log("3000번 포트에서 서버 실행 중 ....");
});



