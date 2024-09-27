// index.js

let isIdChecked = false;

// 중복 확인 버튼 클릭 시 호출되는 함수
function confirmId() {
  const alertElement = document.getElementById("alert");
  alertElement.style.display = "block"; // 알림을 표시
  isIdChecked = true; // 중복 확인 상태를 true로 설정
}

// 회원가입 버튼 클릭 시 호출되는 함수
function signup() {
  const alertWarningElement = document.getElementById("alertWarning");
  const alertPasswordElement = document.getElementById("alertPassword");
  const alertEmptyElement = document.getElementById("alertEmpty");
  const alertTermsElement = document.getElementById("alertTerms");

  // 모든 경고 숨기기
  alertWarningElement.style.display = "none";
  alertPasswordElement.style.display = "none";
  alertEmptyElement.style.display = "none";
  alertTermsElement.style.display = "none";

  // 입력 필드 값 가져오기
  const name = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const password = document.getElementById("inputPassword").value.trim();
  const confirmPassword = document
    .getElementById("inputConfirmPassword")
    .value.trim();
  const termsChecked = document.getElementById("termsCheckbox").checked;

  let hasError = false;

  // 중복 확인 여부 검사
  if (!isIdChecked) {
    alertWarningElement.style.display = "block";
    hasError = true;
  }

  // 암호 확인
  if (password !== confirmPassword) {
    alertPasswordElement.style.display = "block";
    hasError = true;
  }

  // 입력 필드 비어있는지 확인
  if (!name || !email || !password) {
    alertEmptyElement.style.display = "block";
    hasError = true;
  }

  // 약관 동의 체크 여부
  if (!termsChecked) {
    alertTermsElement.style.display = "block";
    hasError = true;
  }

  // 오류가 없으면 회원가입 처리
  if (!hasError) {
    alert("회원가입이 완료되었습니다.");
    // 실제 회원가입 로직을 여기에 추가
  }
}

// 뒤로가기 버튼 클릭 시 페이지 이동 또는 로직 추가
function goBack() {
  window.history.back();
}
