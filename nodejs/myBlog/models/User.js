const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type : String, //자료 유형은 문자열
        require: true, //필수 항목
        unique : true, //username은 중복할 수 없음
    },
    password:{
        type : String, //자료 유형은 문자열
        require: true, //필수 항목
    },
});

// 스키마를 모델로 변환한 후 내보내기
module.exports = mongoose.model("User",userSchema);

