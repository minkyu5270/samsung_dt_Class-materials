let isDuplicateChecked = false;

function join_forms() {
  isDuplicateChecked = true;
  alert("중복 확인이 완료되었습니다.");
}

// 회원가입 버튼 클릭 시 실행되는 함수
function join_forms1() {
  // 입력 필드 값 가져오기
  const name = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const password = document.getElementById("inputPw").value.trim();
  const repeatPassword = document.getElementById("repeatPw").value.trim();
  const isTermsChecked = document.getElementById("flexCheckDefault").checked;

  if (!isDuplicateChecked) {
    showAlert("중복 확인이 되어 있지 않습니다.", "danger");
    return;
  }

  if (password !== repeatPassword) {
    showAlert("암호가 서로 다릅니다.", "danger");
    return;
  }

  if (!name || !email || !password) {
    showAlert("입력되지 않은 항목이 있습니다.", "danger");
    return;
  }

  if (!isTermsChecked) {
    showAlert("약관 동의에 체크해 주세요.", "danger");
    return;
  }

  alert("회원가입을 진행합니다.");
}

function showAlert(message, type) {
  const alertPlaceholder = document.createElement("div");
  alertPlaceholder.className = `alert alert-${type} mt-3`;
  alertPlaceholder.textContent = message;

  const form = document.querySelector("form");
  form.prepend(alertPlaceholder);

  setTimeout(() => {
    alertPlaceholder.remove();
  }, 3000);
}
