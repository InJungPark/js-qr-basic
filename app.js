// 변수 선언
const qrText = document.getElementById("qrText");
const qrImg = document.getElementById("qrImg");
const qrImgBox = document.getElementById("qrImgBox");

const generateButton = document.querySelector("button");

// Error 보여주기(Error 추가)
const showError = () => {
  qrText.classList.add("error-input"); // style에는 카멜케이스가 없음
  // Error 생성
  qrText.classList.add("error");
};

// Error 제거하기
const removeError = () => {
  qrText.classList.remove("error-input");
  qrText.classList.remove("error");
};

// Function
// QR Code를 생성
const generateQRCode = () => {
  if (qrText.value.length > 0) {
    // 이미지경로
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrImgBox.classList.add("showImg");
    removeError();
  } else {
    showError();
  }
};

generateButton.addEventListener("click", generateQRCode);

// addEventListener 사용하여 QR Code 입력하는 창 만들기
// input 입력
qrText.addEventListener("input", () => {
  if (qrText.value.length > 0) {
    removeError();
    // console.log("입력 확인 Test");
  }
});

// input 입력하여 Enter key 사용하도록 처리
qrText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQRCode();
  }
});
